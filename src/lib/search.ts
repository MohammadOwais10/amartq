import { products, categories } from './catalog';
import type { Product } from './types';

export type SearchHit =
  | { kind: 'product'; score: number; product: Product }
  | { kind: 'category'; score: number; slug: string; name: string; tagline: string };

const normalise = (s: string) => s.toLowerCase().trim();

/**
 * Weighted scoring: name matches beat tag matches, and every token in the
 * query must appear somewhere so "linen king sheet" doesn't return all linen.
 */
function scoreProduct(product: Product, query: string, tokens: string[]): number {
  const name = normalise(product.name);
  const collection = normalise(product.collection);
  const tags = product.tags.map(normalise);
  const desc = normalise(product.shortDescription);

  let score = 0;

  if (name === query) score += 1000;
  else if (name.startsWith(query)) score += 400;
  else if (name.includes(query)) score += 240;

  if (collection.includes(query)) score += 120;
  if (desc.includes(query)) score += 60;
  if (tags.some((t) => t === query)) score += 90;
  if (tags.some((t) => t.startsWith(query))) score += 50;
  if (tags.some((t) => t.includes(query))) score += 25;

  for (const token of tokens) {
    if (name.includes(token)) score += 45;
    else if (tags.some((t) => t.includes(token))) score += 22;
    else if (collection.includes(token)) score += 16;
    else if (desc.includes(token)) score += 8;
    else if (normalise(product.category).includes(token)) score += 6;
    else return -1; // every token must match somewhere
  }

  if (product.badges.includes('bestseller')) score += 12;
  if (product.badges.includes('new')) score += 6;

  return score;
}

export function search(query: string, limit = 8): SearchHit[] {
  const q = normalise(query);
  if (q.length < 1) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  const hits: SearchHit[] = [];

  for (const product of products) {
    const score = scoreProduct(product, q, tokens);
    if (score > 0) hits.push({ kind: 'product', score, product });
  }

  for (const category of categories) {
    const haystack = normalise(`${category.name} ${category.tagline} ${category.slug}`);
    if (tokens.every((t) => haystack.includes(t))) {
      hits.push({
        kind: 'category',
        score: 80,
        slug: category.slug,
        name: category.name,
        tagline: category.tagline,
      });
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** Used by /shop to read filters out of the query string. */
export const popularSearches = [
  'linen',
  'bed sheet',
  'velvet cushion',
  'blackout curtain',
  'bath towel',
  'cashmere',
  'flannel',
  'mattress protector',
];
