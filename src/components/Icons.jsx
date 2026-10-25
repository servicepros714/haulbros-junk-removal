// Simple stroke icon set, drawn for this site.
const base = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
  'aria-hidden': true,
}

const paths = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  sofa: <><path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" /><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" /><path d="M5 18v2M19 18v2" /></>,
  fridge: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M5 10h14M9 5v2M9 13v3" /></>,
  garage: <><path d="M3 21V9l9-6 9 6v12" /><path d="M7 21v-8h10v8M7 16h10" /></>,
  hammer: <><path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9" /><path d="M17.6 15 22 10.6M20.9 11.7 12.3 3.1a2 2 0 0 0-2.8 0L8 4.6l9.2 9.2" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></>,
  house: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9v12h14V9" /><path d="M10 21v-6h4v6" /></>,
  tub: <><path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" /><path d="M6 12V5a2 2 0 0 1 3.5-1.3M7 20l-1 2M17 20l1 2" /></>,
  gate: <><path d="M4 21V5M20 21V5M4 9h16M4 15h16" /><path d="M9 5v16M15 5v16" /></>,
  truck: <><path d="M1 6h13v10H1zM14 10h4l3 3v3h-7" /><circle cx="5.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></>,
  recycle: <><path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.1 9.6" /><path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1" /><path d="m14 16-3 3 3 3M8.3 13.6 7.1 9.6l-4 1.1M9.3 5.6l1.1-1.9a1.8 1.8 0 0 1 3.1 0l3.9 6.7M13.4 9.5l4-1.1 1.1 4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M18 6 6 18M6 6l12 12" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />,
}

export default function Icon({ name, size = 24, className, filled = false }) {
  return (
    <svg {...base} width={size} height={size} className={className} fill={filled ? 'currentColor' : 'none'}>
      {paths[name]}
    </svg>
  )
}
