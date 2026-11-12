import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Kishan Sahu — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: 72, color: '#f4f4f5',
          background: 'linear-gradient(135deg,#09090b 0%,#0f1f1d 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#5eead4' }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: '#5eead4', color: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>KS</div>
          kishan sahu
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Software Engineer</div>
          <div style={{ fontSize: 38, marginTop: 20, color: '#a1a1aa' }}>
            Scalable backends &amp; AI-powered products
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 26, color: '#5eead4' }}>
          Java · Spring Boot · Node.js · React · Next.js
        </div>
      </div>
    ),
    size
  )
}
