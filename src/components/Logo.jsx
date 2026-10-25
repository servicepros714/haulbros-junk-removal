import business from '../data/business.js'

// Logo source is 900x423 (2.128:1). Explicit pixel width + aspect-ratio
// + object-fit keeps it from ever stretching inside flex containers.
export default function Logo({ width = 170, className }) {
  const height = Math.round(width / 2.128)
  return (
    <img
      src="/logo.png"
      alt={business.name}
      width={width}
      height={height}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        aspectRatio: '900 / 423',
        objectFit: 'contain',
        alignSelf: 'flex-start',
        flexShrink: 0,
      }}
    />
  )
}
