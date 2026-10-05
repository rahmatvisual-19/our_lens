import React from 'react'

// OurLens Brand Logo matching the official emblem
// Camera outline with crescent moon and sparkle stars inside the lens
export function OurLensIcon({ size = 32, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {/* Camera Viewfinder */}
        <path
          d="M 37 32 Q 37 27 42 27 L 58 27 Q 63 27 63 32 L 63 36 L 37 36 Z"
          strokeWidth="3.5"
        />

        {/* Camera Body Outlines */}
        <path d="M 23 44 Q 15 44 15 52 L 15 58" strokeWidth="3.5" />
        <path d="M 15 48 Q 15 37 27 37 L 37 37" strokeWidth="3.5" />
        <path d="M 63 37 L 73 37 Q 85 37 85 48 L 85 58" strokeWidth="3.5" />

        {/* Flash window */}
        <rect x="20" y="42" width="7" height="4" rx="1.5" strokeWidth="2.5" />

        {/* Main Lens Outer Ring Arcs */}
        <path d="M 27 46 A 27 27 0 0 1 73 46" strokeWidth="3.5" />
        <path d="M 75 66 A 27 27 0 0 1 25 66" strokeWidth="3.5" />
      </g>

      {/* Solid Elements inside Lens */}
      {/* Crescent Moon */}
      <path
        d="M 52 41.5 A 16.5 16.5 0 0 1 52 74.5 A 13 13 0 0 0 52 41.5 Z"
        fill={color}
      />

      {/* Upper Sparkle Star */}
      <path
        d="M 41.5 47 Q 41.5 52 46.5 52 Q 41.5 52 41.5 57 Q 41.5 52 36.5 52 Q 41.5 52 41.5 47 Z"
        fill={color}
      />

      {/* Lower Sparkle Star */}
      <path
        d="M 44.5 59.5 Q 44.5 63 48 63 Q 44.5 63 44.5 66.5 Q 44.5 63 41 63 Q 44.5 63 44.5 59.5 Z"
        fill={color}
      />
    </svg>
  )
}

// Full Wordmark + Emblem Lockup
export function OurLensLogo({
  height = 36,
  color = 'currentColor',
  textColor = 'currentColor',
  showText = true,
  className = '',
}) {
  return (
    <div
      className={`ourlens-brand-lockup ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        lineHeight: 1,
      }}
    >
      <OurLensIcon size={height} color={color} />
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-serif, 'Newsreader', 'Playfair Display', Georgia, serif)",
            fontSize: `${height * 0.72}px`,
            fontWeight: 600,
            color: textColor,
            letterSpacing: '-0.02em',
            display: 'inline-block',
          }}
        >
          urLens
        </span>
      )}
    </div>
  )
}
