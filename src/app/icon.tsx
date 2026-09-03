import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#1d1b18',
        color: '#f4f0e8',
        display: 'flex',
        fontSize: 27,
        fontWeight: 700,
        height: '100%',
        justifyContent: 'center',
        letterSpacing: '-0.12em',
        width: '100%',
      }}
    >
      JK
    </div>,
    size,
  )
}
