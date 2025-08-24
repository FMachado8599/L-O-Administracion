import * as React from "react";

type Props = { size?: number; color?: string; style?: React.CSSProperties };

export function MailIcon({ size = 16, color = "#2563eb", style }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ verticalAlign: "middle", marginRight: 8, ...style }}>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 16, color = "#2563eb", style }: Props) {
  // ícono simple (compat alto). Si querés otro, pegamos el <path> del SVG que te guste
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ verticalAlign: "middle", marginRight: 8, ...style }}>
      <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="none" stroke={color} strokeWidth="2"/>
      <circle cx="12" cy="18" r="1.5" fill={color}/>
    </svg>
  );
}
