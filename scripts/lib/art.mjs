/**
 * Deterministic textile-artwork engine.
 * Produces SVG source for woven/printed fabric swatches in the AMARTQ palette.
 */

export function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function makeRng(seed) {
  let s = seed >>> 0;
  return function rng() {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}

export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

export function mix(a, b, amount) {
  const x = hexToRgb(a);
  const y = hexToRgb(b);
  return rgbToHex({
    r: x.r + (y.r - x.r) * amount,
    g: x.g + (y.g - x.g) * amount,
    b: x.b + (y.b - x.b) * amount,
  });
}

export const shade = (hex, amount) => mix(hex, '#0B1220', amount);
export const tint = (hex, amount) => mix(hex, '#FFFFFF', amount);

/** Relative luminance — used to pick readable contrast colours. */
export function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const f = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export const readableOn = (hex) => (luminance(hex) > 0.45 ? '#12161F' : '#FFFFFF');

/* ------------------------------------------------------------------ *
 * Surface treatments — the repeating motif layer of a fabric
 * ------------------------------------------------------------------ */

const surfaces = {
  solid() {
    return { tile: 0, body: '' };
  },

  grain() {
    return { tile: 0, body: '' };
  },

  stripe({ base, fg, rng }) {
    const wide = 40 + Math.floor(rng() * 60);
    const thin = 10 + Math.floor(rng() * 14);
    const gap = 30 + Math.floor(rng() * 40);
    const w = wide + gap + thin + gap;
    return {
      tile: w * 2,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        <rect x="${gap}" width="${wide}" height="${w}" fill="${fg}" opacity="0.92"/>
        <rect x="${gap + wide + gap}" width="${thin}" height="${w}" fill="${fg}" opacity="0.55"/>`,
    };
  },

  pinstripe({ base, fg, rng }) {
    const gap = 22 + Math.floor(rng() * 18);
    const line = 2;
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <rect width="${line}" height="${gap * 2}" fill="${fg}" opacity="0.42"/>`,
    };
  },

  check({ base, fg, rng }) {
    const gap = 56 + Math.floor(rng() * 50);
    const band = 18 + Math.floor(rng() * 14);
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <rect width="${gap * 2}" height="${band}" fill="${fg}" opacity="0.85"/>
        <rect width="${band}" height="${gap * 2}" fill="${fg}" opacity="0.85"/>
        <rect y="${gap}" width="${gap * 2}" height="${band / 2}" fill="${fg}" opacity="0.3"/>
        <rect x="${gap}" width="${band / 2}" height="${gap * 2}" fill="${fg}" opacity="0.3"/>`,
    };
  },

  dot({ base, fg, rng }) {
    const gap = 46 + Math.floor(rng() * 40);
    const r = 5 + Math.floor(rng() * 7);
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <circle cx="${gap}" cy="${gap}" r="${r}" fill="${fg}" opacity="0.8"/>
        <circle cx="${gap * 2}" cy="${gap * 2}" r="${r * 0.5}" fill="${fg}" opacity="0.45"/>`,
    };
  },

  chevron({ base, fg, rng }) {
    const step = 40 + Math.floor(rng() * 26);
    const amp = 12 + Math.floor(rng() * 10);
    const w = step * 2;
    return {
      tile: w,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        <g fill="none" stroke="${fg}" stroke-width="${amp}" opacity="0.75" stroke-linejoin="miter">
          <path d="M0 ${w / 2 + amp} L${step} ${w / 2 - amp} L${w} ${w / 2 + amp}"/>
          <path d="M0 ${w / 2 + amp + w / 2} L${step} ${w / 2 - amp + w / 2} L${w} ${w / 2 + amp + w / 2}"/>
        </g>`,
    };
  },

  weave({ base, fg, rng }) {
    const cell = 14 + Math.floor(rng() * 10);
    return {
      tile: cell * 2,
      body: `<rect width="${cell * 2}" height="${cell * 2}" fill="${base}"/>
        <rect width="${cell}" height="${cell}" fill="${fg}" opacity="0.16"/>
        <rect x="${cell}" y="${cell}" width="${cell}" height="${cell}" fill="${fg}" opacity="0.16"/>`,
    };
  },

  herringbone({ base, fg, rng }) {
    const step = 26 + Math.floor(rng() * 16);
    const w = step * 4;
    return {
      tile: w,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        <g fill="none" stroke="${fg}" stroke-width="${step * 0.42}" opacity="0.5">
          <path d="M${step * 0.5} 0 L${step * 1.5} ${step}"/>
          <path d="M${step * 1.5} 0 L${step * 2.5} ${step}"/>
          <path d="M${step * 2.5} 0 L${step * 3.5} ${step}"/>
          <path d="M${step * 3.5} 0 L${step * 4.5} ${step}"/>
          <path d="M${step * 1.5} 0 L${step * 0.5} ${step}"/>
          <path d="M${step * 2.5} 0 L${step * 1.5} ${step}"/>
          <path d="M${step * 3.5} 0 L${step * 2.5} ${step}"/>
        </g>`,
    };
  },

  block({ base, fg, rng }) {
    const gap = 70 + Math.floor(rng() * 60);
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <rect width="${gap}" height="${gap}" fill="${fg}" opacity="0.9"/>
        <rect x="${gap}" y="${gap}" width="${gap}" height="${gap}" fill="${fg}" opacity="0.5"/>
        <rect x="${gap * 0.28}" y="${gap * 0.28}" width="${gap * 0.44}" height="${gap * 0.44}" fill="${base}" opacity="0.55"/>`,
    };
  },

  leaf({ base, fg, rng }) {
    const gap = 120 + Math.floor(rng() * 60);
    const w = gap * 2;
    return {
      tile: w,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        <g fill="${fg}" opacity="0.55">
          <path d="M${gap * 0.5} ${gap * 0.5} c 34 -6 52 22 44 50 c -30 10 -50 -12 -44 -50 z"/>
          <path d="M${gap * 1.45} ${gap * 1.45} c -34 6 -52 -22 -44 -50 c 30 -10 50 12 44 50 z" transform="rotate(180 ${gap * 1.45} ${gap * 1.45})"/>
        </g>
        <g stroke="${base}" stroke-width="3" fill="none" opacity="0.5">
          <path d="M${gap * 0.56} ${gap * 0.92} q 18 -22 34 -34"/>
        </g>`,
    };
  },

  floral({ base, fg, rng }) {
    const gap = 150 + Math.floor(rng() * 70);
    const w = gap * 2;
    const petal = 26 + Math.floor(rng() * 12);
    const flower = (cx, cy, s, o) => `
      <g transform="translate(${cx} ${cy}) scale(${s})" fill="${fg}" opacity="${o}">
        <ellipse cx="0" cy="${-petal}" rx="${petal * 0.44}" ry="${petal}"/>
        <ellipse cx="0" cy="${-petal}" rx="${petal * 0.44}" ry="${petal}" transform="rotate(72)"/>
        <ellipse cx="0" cy="${-petal}" rx="${petal * 0.44}" ry="${petal}" transform="rotate(144)"/>
        <ellipse cx="0" cy="${-petal}" rx="${petal * 0.44}" ry="${petal}" transform="rotate(216)"/>
        <ellipse cx="0" cy="${-petal}" rx="${petal * 0.44}" ry="${petal}" transform="rotate(288)"/>
        <circle r="${petal * 0.36}" fill="${base}" opacity="0.85"/>
      </g>`;
    return {
      tile: w,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        <g fill="${fg}" opacity="0.4">
          <path d="M${gap * 0.35} ${gap * 1.75} c 30 4 44 -18 40 -40 c -26 -6 -42 14 -40 40 z"/>
          <path d="M${gap * 1.8} ${gap * 0.6} c -6 30 -34 34 -52 18 c 4 -28 28 -38 52 -18 z"/>
        </g>
        ${flower(gap * 0.6, gap * 0.6, 1, 0.8)}
        ${flower(gap * 1.45, gap * 1.5, 0.66, 0.55)}`,
    };
  },

  damask({ base, fg, rng }) {
    const gap = 170 + Math.floor(rng() * 60);
    const w = gap * 2;
    const r = gap * 0.42;
    const motif = (cx, cy, o) => `
      <g transform="translate(${cx} ${cy})" fill="${fg}" opacity="${o}">
        <path d="M0 ${-r} C ${r * 0.7} ${-r * 0.72} ${r * 0.72} ${-r * 0.7} ${r} 0 C ${r * 0.72} ${r * 0.7} ${r * 0.7} ${r * 0.72} 0 ${r} C ${-r * 0.7} ${r * 0.72} ${-r * 0.72} ${r * 0.7} ${-r} 0 C ${-r * 0.72} ${-r * 0.7} ${-r * 0.7} ${-r * 0.72} 0 ${-r} z"/>
        <path d="M0 ${-r * 0.55} C ${r * 0.4} ${-r * 0.4} ${r * 0.4} ${r * 0.4} 0 ${r * 0.55} C ${-r * 0.4} ${r * 0.4} ${-r * 0.4} ${-r * 0.4} 0 ${-r * 0.55} z" fill="${base}" opacity="0.6"/>
        <circle r="${r * 0.16}" opacity="0.9"/>
      </g>`;
    return {
      tile: w,
      body: `<rect width="${w}" height="${w}" fill="${base}"/>
        ${motif(gap, gap, 0.42)}
        ${motif(gap * 2, gap * 2, 0.42)}
        ${motif(gap * 2, gap, 0.22)}
        ${motif(gap, gap * 2, 0.22)}`,
    };
  },

  terrazzo({ base, fg, rng }) {
    const gap = 130 + Math.floor(rng() * 40);
    const w = gap * 2;
    let chips = '';
    const n = 26;
    for (let i = 0; i < n; i += 1) {
      const cx = rng() * w;
      const cy = rng() * w;
      const s = 6 + rng() * 16;
      const rot = rng() * 360;
      chips += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${s.toFixed(1)}" height="${(s * (0.5 + rng() * 0.7)).toFixed(1)}" rx="${(s * 0.2).toFixed(1)}" fill="${fg}" opacity="${(0.35 + rng() * 0.5).toFixed(2)}" transform="rotate(${rot.toFixed(0)} ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`;
    }
    return { tile: w, body: `<rect width="${w}" height="${w}" fill="${base}"/>${chips}` };
  },

  wave({ base, fg, rng }) {
    const gap = 60 + Math.floor(rng() * 40);
    const amp = 16 + Math.floor(rng() * 18);
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <path d="M0 ${gap * 0.75} q ${gap * 0.5} ${-amp} ${gap} 0 t ${gap} 0" fill="none" stroke="${fg}" stroke-width="${3 + rng() * 4}" opacity="0.6"/>
        <path d="M0 ${gap * 1.75} q ${gap * 0.5} ${-amp} ${gap} 0 t ${gap} 0" fill="none" stroke="${fg}" stroke-width="${2 + rng() * 3}" opacity="0.38"/>`,
    };
  },

  boucle({ base, fg, rng }) {
    const gap = 26 + Math.floor(rng() * 18);
    let loops = '';
    for (let i = 0; i < 40; i += 1) {
      const cx = rng() * gap * 2;
      const cy = rng() * gap * 2;
      const r = 3 + rng() * 7;
      loops += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke="${fg}" stroke-width="${(1 + rng() * 2.4).toFixed(1)}" opacity="${(0.25 + rng() * 0.45).toFixed(2)}"/>`;
    }
    return { tile: gap * 2, body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>${loops}` };
  },

  terry({ base, fg, rng }) {
    const gap = 12 + Math.floor(rng() * 10);
    return {
      tile: gap * 2,
      body: `<rect width="${gap * 2}" height="${gap * 2}" fill="${base}"/>
        <g fill="${fg}" opacity="0.3">
          <rect width="${gap}" height="${gap}" rx="${gap / 2.4}"/>
          <rect x="${gap}" y="${gap}" width="${gap}" height="${gap}" rx="${gap / 2.4}"/>
        </g>`,
    };
  },
};

export const surfaceNames = Object.keys(surfaces);

/* ------------------------------------------------------------------ *
 * Fabric sheet composition
 * ------------------------------------------------------------------ */

/**
 * @param {object} o
 * @param {string} o.seed
 * @param {string} o.base      ground colour
 * @param {string} o.accent    motif colour
 * @param {string} o.surface   key of `surfaces`
 * @param {number} o.w
 * @param {number} o.h
 * @param {'drape'|'detail'|'flat'} o.view
 */
export function fabricSheet({ seed, base, accent, surface = 'weave', w = 1000, h = 1250, view = 'drape' }) {
  const rng = makeRng(hashSeed(`${seed}:${view}`));
  const uid = hashSeed(`${seed}:${view}`).toString(36);

  const makeSurface = surfaces[surface] ?? surfaces.weave;
  const { tile, body } = makeSurface({ base, fg: accent, rng });
  const hasPattern = tile > 0;

  const light = tint(base, 0.55);
  const dark = shade(base, 0.45);

  /* Fabric folds: soft blurred bands, angled, that read as draped cloth. */
  const foldCount = view === 'detail' ? 5 : 4;
  let folds = '';
  for (let i = 0; i < foldCount; i += 1) {
    const y = (h / (foldCount + 1)) * (i + 0.5) + (rng() - 0.5) * (h / (foldCount + 3));
    const thick = h * (0.1 + rng() * 0.16);
    const tilt = -12 + rng() * 24;
    const op = (0.1 + rng() * 0.16).toFixed(3);
    folds += `<g transform="rotate(${tilt.toFixed(2)} ${w / 2} ${h / 2})">
      <ellipse cx="${(w * (0.2 + rng() * 0.6)).toFixed(0)}" cy="${y.toFixed(0)}" rx="${(w * (0.5 + rng() * 0.35)).toFixed(0)}" ry="${thick.toFixed(0)}" fill="${light}" opacity="${op}" filter="url(#soft${uid})"/>
      <ellipse cx="${(w * (0.2 + rng() * 0.6)).toFixed(0)}" cy="${(y + thick * 0.85).toFixed(0)}" rx="${(w * (0.45 + rng() * 0.35)).toFixed(0)}" ry="${(thick * 0.7).toFixed(0)}" fill="${dark}" opacity="${(Number(op) * 0.8).toFixed(3)}" filter="url(#soft${uid})"/>
    </g>`;
  }

  /* Directional sheen — a broad diagonal light sweep. */
  const sheenAngle = -24 + rng() * 48;
  const sheenOp = view === 'flat' ? 0.1 : 0.2;

  /* Selvedge / hem detail for product realism on the drape view. */
  const hem = view === 'drape'
    ? `<g opacity="0.5">
        <rect x="0" y="${h - 26}" width="${w}" height="26" fill="${shade(base, 0.18)}"/>
        <rect x="0" y="${h - 30}" width="${w}" height="4" fill="${light}" opacity="0.5"/>
        <g stroke="${shade(base, 0.3)}" stroke-width="1.5" opacity="0.5">
          ${Array.from({ length: Math.floor(w / 26) }, (_, i) => `<line x1="${i * 26 + 13}" y1="${h - 26}" x2="${i * 26 + 13}" y2="${h}"/>`).join('')}
        </g>
      </g>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="base${uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${tint(base, 0.16)}"/>
      <stop offset="52%" stop-color="${base}"/>
      <stop offset="100%" stop-color="${shade(base, 0.22)}"/>
    </linearGradient>
    <linearGradient id="sheen${uid}" gradientTransform="rotate(${sheenAngle.toFixed(1)} 0.5 0.5)">
      <stop offset="0%" stop-color="${light}" stop-opacity="0"/>
      <stop offset="42%" stop-color="${light}" stop-opacity="${sheenOp}"/>
      <stop offset="58%" stop-color="${light}" stop-opacity="${sheenOp * 0.6}"/>
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.16"/>
    </linearGradient>
    <radialGradient id="vig${uid}" cx="50%" cy="42%" r="78%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0A0F1A" stop-opacity="0.3"/>
    </radialGradient>
    <filter id="soft${uid}" x="-45%" y="-45%" width="190%" height="190%">
      <feGaussianBlur stdDeviation="${(w * 0.055).toFixed(1)}"/>
    </filter>
    <filter id="grain${uid}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${hashSeed(seed) % 1000}" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
    </filter>
    ${hasPattern ? `<pattern id="pat${uid}" width="${tile}" height="${tile}" patternUnits="userSpaceOnUse">${body}</pattern>` : ''}
  </defs>

  <rect width="${w}" height="${h}" fill="url(#base${uid})"/>
  ${hasPattern ? `<rect width="${w}" height="${h}" fill="url(#pat${uid})" opacity="0.92"/>` : ''}
  ${folds}
  <rect width="${w}" height="${h}" fill="url(#sheen${uid})"/>
  ${hem}
  <rect width="${w}" height="${h}" fill="url(#vig${uid})"/>
  <rect width="${w}" height="${h}" filter="url(#grain${uid})" opacity="0.15" style="mix-blend-mode:overlay"/>
</svg>`;
}

/* ------------------------------------------------------------------ *
 * Editorial scene illustrations (flat, architectural)
 * ------------------------------------------------------------------ */

const C = {
  navy: '#09254A',
  orange: '#FF7900',
  cream: '#F7F2E9',
  sand: '#E4D8C6',
  stone: '#C9BCA8',
  ink: '#0B1220',
  cloud: '#FFFDF8',
};

/** A made bed, drawn front-on in a quiet room. */
export function bedScene({ seed, w = 1800, h = 1200, accent = C.orange, ground = C.sand }) {
  const rng = makeRng(hashSeed(seed));
  const jitter = (v, a = 4) => (v + (rng() - 0.5) * a).toFixed(1);
  const floorY = h * 0.78;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.cream}"/><stop offset="100%" stop-color="${C.sand}"/>
    </linearGradient>
    <linearGradient id="duvet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${tint(ground, 0.3)}"/><stop offset="100%" stop-color="${shade(ground, 0.16)}"/>
    </linearGradient>
    <linearGradient id="lightpool" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </linearGradient>
    <filter id="bshadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#wall)"/>
  <rect x="0" y="${floorY}" width="${w}" height="${h - floorY}" fill="${shade(ground, 0.3)}"/>

  <!-- window light -->
  <path d="M${w * 0.62} 0 L${w} 0 L${w} ${floorY} L${w * 0.44} ${floorY} Z" fill="url(#lightpool)"/>

  <!-- headboard -->
  <rect x="${jitter(w * 0.2)}" y="${jitter(h * 0.3)}" width="${w * 0.56}" height="${h * 0.3}" rx="10" fill="${shade(ground, 0.42)}"/>
  <rect x="${jitter(w * 0.2)}" y="${jitter(h * 0.3)}" width="${w * 0.56}" height="${h * 0.3}" rx="10" fill="none" stroke="${tint(ground, 0.25)}" stroke-width="2" opacity="0.6"/>

  <!-- base + legs -->
  <ellipse cx="${w * 0.48}" cy="${floorY + 26}" rx="${w * 0.34}" ry="24" fill="${C.ink}" opacity="0.22" filter="url(#bshadow)"/>
  <rect x="${w * 0.16}" y="${h * 0.56}" width="${w * 0.64}" height="${h * 0.06}" fill="${shade(ground, 0.5)}"/>
  <rect x="${w * 0.19}" y="${h * 0.62}" width="18" height="${h * 0.1}" fill="${shade(ground, 0.55)}"/>
  <rect x="${w * 0.75}" y="${h * 0.62}" width="18" height="${h * 0.1}" fill="${shade(ground, 0.55)}"/>

  <!-- duvet -->
  <path d="M${w * 0.14} ${h * 0.5} L${w * 0.82} ${h * 0.5} L${w * 0.86} ${h * 0.63} Q ${w * 0.5} ${h * 0.68} ${w * 0.1} ${h * 0.63} Z" fill="url(#duvet)"/>
  <g stroke="${shade(ground, 0.3)}" stroke-width="3" fill="none" opacity="0.45">
    <path d="M${w * 0.3} ${h * 0.51} Q ${w * 0.27} ${h * 0.6} ${w * 0.29} ${h * 0.645}"/>
    <path d="M${w * 0.48} ${h * 0.51} Q ${w * 0.5} ${h * 0.61} ${w * 0.47} ${h * 0.65}"/>
    <path d="M${w * 0.66} ${h * 0.51} Q ${w * 0.69} ${h * 0.6} ${w * 0.67} ${h * 0.645}"/>
  </g>
  <!-- folded throw across the foot -->
  <rect x="${w * 0.1}" y="${h * 0.575}" width="${w * 0.76}" height="${h * 0.042}" rx="8" fill="${accent}" opacity="0.9"/>
  <rect x="${w * 0.1}" y="${h * 0.575}" width="${w * 0.76}" height="${h * 0.042}" rx="8" fill="${C.ink}" opacity="0.08"/>

  <!-- pillows -->
  <g>
    <rect x="${w * 0.26}" y="${h * 0.4}" width="${w * 0.2}" height="${h * 0.11}" rx="18" fill="${C.cloud}"/>
    <rect x="${w * 0.26}" y="${h * 0.4}" width="${w * 0.2}" height="${h * 0.11}" rx="18" fill="none" stroke="${shade(ground, 0.25)}" stroke-width="1.5" opacity="0.5"/>
    <rect x="${w * 0.52}" y="${h * 0.4}" width="${w * 0.2}" height="${h * 0.11}" rx="18" fill="${tint(ground, 0.5)}"/>
    <rect x="${w * 0.38}" y="${h * 0.42}" width="${w * 0.24}" height="${h * 0.1}" rx="16" fill="${C.cloud}"/>
  </g>

  <!-- side table + lamp -->
  <rect x="${w * 0.86}" y="${h * 0.56}" width="${w * 0.1}" height="${h * 0.05}" fill="${shade(ground, 0.5)}"/>
  <rect x="${w * 0.9}" y="${h * 0.61}" width="12" height="${h * 0.11}" fill="${shade(ground, 0.55)}"/>
  <path d="M${w * 0.875} ${h * 0.44} L${w * 0.945} ${h * 0.44} L${w * 0.935} ${h * 0.56} L${w * 0.885} ${h * 0.56} Z" fill="${C.navy}"/>
  <circle cx="${w * 0.91}" cy="${h * 0.5}" r="7" fill="${accent}"/>
</svg>`;
}

/** A window dressed with curtains. */
export function curtainScene({ seed, w = 1600, h = 1200, accent = C.orange }) {
  const rng = makeRng(hashSeed(seed));
  const panels = 7;
  let folds = '';
  for (let i = 0; i < panels; i += 1) {
    const x = w * 0.16 + (i * w * 0.68) / panels;
    const fw = (w * 0.68) / panels;
    const depth = 0.55 + rng() * 0.45;
    folds += `<path d="M${x} ${h * 0.1} q ${-fw * 0.16} ${h * 0.4} 0 ${h * 0.8} l ${fw} 0 q ${-fw * 0.16} ${-h * 0.4} 0 ${-h * 0.8} z" fill="${i % 2 ? C.stone : C.sand}" opacity="${(0.72 + depth * 0.28).toFixed(2)}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="daylight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="${C.cream}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${C.navy}"/>
  <rect x="${w * 0.12}" y="${h * 0.08}" width="${w * 0.76}" height="${h * 0.84}" fill="url(#daylight)"/>
  <g opacity="0.35" stroke="${C.stone}" stroke-width="3">
    <line x1="${w * 0.12}" y1="${h * 0.08}" x2="${w * 0.12}" y2="${h * 0.92}"/>
    <line x1="${w * 0.88}" y1="${h * 0.08}" x2="${w * 0.88}" y2="${h * 0.92}"/>
    <line x1="${w * 0.12}" y1="${h * 0.08}" x2="${w * 0.88}" y2="${h * 0.08}"/>
    <line x1="${w * 0.12}" y1="${h * 0.92}" x2="${w * 0.88}" y2="${h * 0.92}"/>
    <line x1="${w * 0.5}" y1="${h * 0.08}" x2="${w * 0.5}" y2="${h * 0.92}"/>
  </g>
  ${folds}
  <rect x="0" y="${h * 0.08}" width="${w * 0.16}" height="${h * 0.84}" fill="${shade(C.sand, 0.18)}"/>
  <rect x="${w * 0.84}" y="${h * 0.08}" width="${w * 0.16}" height="${h * 0.84}" fill="${shade(C.sand, 0.1)}"/>
  <rect x="0" y="${h * 0.04}" width="${w}" height="${h * 0.05}" rx="8" fill="${C.navy}"/>
  <rect x="${w * 0.3}" y="${h * 0.86}" width="${w * 0.4}" height="${h * 0.05}" fill="${accent}" opacity="0.85"/>
</svg>`;
}

/** Neatly folded stack of textiles. */
export function stackScene({ seed, w = 1600, h = 1200, accent = C.orange }) {
  const rng = makeRng(hashSeed(seed));
  const items = [];
  const n = 5;
  let y = h * 0.78;
  for (let i = 0; i < n; i += 1) {
    const height = h * (0.055 + rng() * 0.03);
    const x = w * (0.26 + rng() * 0.06);
    const width = w * (0.42 - i * 0.012);
    const colour = [C.stone, C.cream, C.sand, shade(C.stone, 0.12), C.cloud][i % 5];
    items.push(`<g>
      <rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${width.toFixed(0)}" height="${height.toFixed(0)}" rx="6" fill="${colour}"/>
      <rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${width.toFixed(0)}" height="${(height * 0.3).toFixed(0)}" rx="6" fill="${C.ink}" opacity="0.07"/>
      <rect x="${(x + width * 0.06).toFixed(0)}" y="${(y + height * 0.35).toFixed(0)}" width="${(width * 0.5).toFixed(0)}" height="3" fill="${C.ink}" opacity="0.16"/>
    </g>`);
    y -= height + h * 0.012;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${C.cream}"/><stop offset="100%" stop-color="${tint(C.sand, 0.2)}"/>
    </linearGradient>
    <filter id="ss" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="30"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <circle cx="${w * 0.5}" cy="${h * 0.55}" r="${w * 0.34}" fill="${accent}" opacity="0.1"/>
  <ellipse cx="${w * 0.5}" cy="${h * 0.82}" rx="${w * 0.26}" ry="26" fill="${C.ink}" opacity="0.2" filter="url(#ss)"/>
  ${items.join('')}
</svg>`;
}

export const scenes = { bedScene, curtainScene, stackScene };
