export function Logo() {
  return (
    <svg
      width="140"
      height="26"
      viewBox="0 0 140 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.0302 21.5V9.69231C14.0302 4.34789 18.2381 0 23.4302 0H24.6925C29.8846 0 34.0925 4.34789 34.0925 9.69231V14.5"
        stroke="hsl(var(--primary))"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M31.2268 12.6346C31.2268 18.3995 35.8845 23.25 41.4968 23.25C47.109 23.25 51.7668 18.3995 51.7668 12.6346C51.7668 6.8697 47.109 2 41.4968 2"
        stroke="hsl(var(--accent))"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text
        x="58"
        y="10"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="hsl(var(--primary))"
        letterSpacing="0.05em"
      >
        NUSHIFT
      </text>
      <text
        x="58"
        y="23"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="hsl(var(--accent))"
        letterSpacing="0.05em"
      >
        CONNECT
      </text>
    </svg>
  );
}