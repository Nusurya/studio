export function Logo() {
  return (
    <svg
      height="36"
      viewBox="0 0 200 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.5 30V11.25C21.5 5.03756 26.3208 0 32.25 0H33.75C39.6792 0 44.5 5.03756 44.5 11.25V18"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M41 15.5C41 22.6716 46.5784 28.5 53.75 28.5C60.9216 28.5 66.5 22.6716 66.5 15.5C66.5 8.32843 60.9216 2.5 53.75 2.5"
        stroke="hsl(var(--accent))"
        strokeWidth="5"
        strokeLinecap="round"
      />
       <text
        x="75"
        y="12"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="hsl(var(--primary))"
      >
        NUSHIFT
      </text>
      <text
        x="75"
        y="29"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="hsl(var(--accent))"
      >
        CONNECT
      </text>
    </svg>
  );
}
