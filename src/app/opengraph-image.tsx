import { ImageResponse } from 'next/og'

export const alt = 'John Kim — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#f4f0e8',
        color: '#1d1b18',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '72px',
        width: '100%',
      }}
    >
      <div
        style={{
          color: '#1c4e80',
          display: 'flex',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        Software Engineer / San Francisco
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: '-0.07em',
          }}
        >
          John Kim
        </div>
        <div style={{ color: '#5f5b54', display: 'flex', fontSize: 30 }}>
          Infrastructure, developer tooling, and checkout systems.
        </div>
      </div>
      <div
        style={{
          alignItems: 'center',
          borderTop: '2px solid #1d1b18',
          display: 'flex',
          fontSize: 24,
          justifyContent: 'space-between',
          paddingTop: '24px',
        }}
      >
        <span>Systems with clear outcomes.</span>
        <span style={{ color: '#1c4e80', fontWeight: 700 }}>JK</span>
      </div>
    </div>,
    size,
  )
}
