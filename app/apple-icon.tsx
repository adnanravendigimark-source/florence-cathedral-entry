import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1B2B",
          borderRadius: "40px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Base drum with circular oculi windows */}
          <rect x="8" y="34" width="32" height="7" rx="1.5" fill="#FAF8F5" />
          <circle cx="14" cy="37.5" r="1.5" fill="#0B1B2B" />
          <circle cx="20" cy="37.5" r="1.5" fill="#0B1B2B" />
          <circle cx="24" cy="37.5" r="1.5" fill="#0B1B2B" />
          <circle cx="28" cy="37.5" r="1.5" fill="#0B1B2B" />
          <circle cx="34" cy="37.5" r="1.5" fill="#0B1B2B" />

          {/* Brunelleschi's iconic pointed terracotta dome */}
          <path
            d="M8 34 C10 18, 20 12, 24 8 C28 12, 38 18, 40 34 Z"
            fill="#B85D3E"
          />

          {/* White marble ribs */}
          <path
            d="M24 8 C24 16, 24 26, 24 34"
            stroke="#FAF8F5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24 8 C19 16, 14 26, 13 34"
            stroke="#FAF8F5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M24 8 C29 16, 34 26, 35 34"
            stroke="#FAF8F5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Marble Lantern & Golden sphere */}
          <rect x="21.5" y="4" width="5" height="4.5" fill="#FAF8F5" rx="0.5" />
          <circle cx="24" cy="3" r="1.8" fill="#E2A03F" stroke="#B85D3E" strokeWidth="0.6" />
          <line x1="24" y1="1" x2="24" y2="0" stroke="#FAF8F5" strokeWidth="1" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
