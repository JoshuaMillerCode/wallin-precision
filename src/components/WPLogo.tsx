/**
 * Shield logo matching Wallin Precision Facebook: dark shield, silver W,
 * olive-gold P with crosshairs, metallic border.
 */
export function WPLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Shield shape */}
      <path
        d="M32 4 L56 14 L56 32 C56 48 44 58 32 60 C20 58 8 48 8 32 L8 14 Z"
        fill="#1c1c1e"
        stroke="#9ca3af"
        strokeWidth="2.5"
      />
      {/* W - metallic silver */}
      <text
        x="22"
        y="38"
        fill="#b0b4bc"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="700"
      >
        W
      </text>
      {/* P - olive-gold (slightly behind/right of W) */}
      <text
        x="32"
        y="38"
        fill="#8b9a4d"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="700"
      >
        P
      </text>
      {/* Crosshairs over P */}
      <circle cx="40" cy="32" r="4" fill="none" stroke="#8b9a4d" strokeWidth="1.2" />
      <line x1="40" y1="28" x2="40" y2="36" stroke="#8b9a4d" strokeWidth="1" />
      <line x1="36" y1="32" x2="44" y2="32" stroke="#8b9a4d" strokeWidth="1" />
      {/* Two curved lines at bottom of shield */}
      <path
        d="M24 50 Q32 54 40 50"
        fill="none"
        stroke="#8b9a4d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 54 Q32 57 38 54"
        fill="none"
        stroke="#8b9a4d"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
