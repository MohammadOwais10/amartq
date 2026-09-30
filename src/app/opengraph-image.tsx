import { ImageResponse } from 'next/og';
import { store } from '@/lib/store';

export const alt = `${store.name} — ${store.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#09254A',
          padding: '72px 80px',
        }}
      >
        {/* Accent rule */}
        <div style={{ display: 'flex', width: 120, height: 6, background: '#FF7900' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 116,
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {store.name}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 40,
              color: '#F5C99B',
              letterSpacing: '0.01em',
            }}
          >
            {store.tagline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.18)',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', fontSize: 28, color: '#C7D3E2' }}>
            Long-staple cotton &middot; European linen &middot; RWS wool
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#FF7900',
              fontWeight: 600,
            }}
          >
            amartq.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
