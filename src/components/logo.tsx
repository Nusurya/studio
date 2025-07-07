export function Logo() {
  return (
    <svg
      width="210"
      height="38"
      viewBox="0 0 210 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M25 34V15.25C25 9.03756 29.8208 4 35.75 4H37.25C43.1792 4 48 9.03756 48 15.25V22"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M44.5 19.5C44.5 26.6716 50.0784 32.5 57.25 32.5C64.4216 32.5 70 26.6716 70 19.5C70 12.3284 64.4216 6.5 57.25 6.5"
        stroke="hsl(var(--accent))"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g>
        <text
          x="82"
          y="18"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="bold"
          letterSpacing="0.05em"
          fill="hsl(var(--primary))"
        >
          NUSHIFT
        </text>
        <text
          x="82"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="bold"
          letterSpacing="0.05em"
          fill="hsl(var(--accent))"
        >
          CONNECT
        </text>
      </g>
    </svg>
  );
}
