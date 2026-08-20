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
          background: "linear-gradient(135deg, #243447 0%, #131c26 100%)",
          borderRadius: "40px",
          border: "4px solid #8FA6B5",
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect x="8" y="34" width="32" height="6" rx="1" fill="#D9C9AA" />
          <path
            d="M8 34 C11 20, 20 13, 24 9 C28 13, 37 20, 40 34 Z"
            fill="#A85C43"
          />
          <path
            d="M24 9 C24 17, 24 26, 24 34"
            stroke="#F7F4EC"
            strokeWidth="2"
          />
          <path
            d="M24 9 C20 17, 15 26, 14 34"
            stroke="#F7F4EC"
            strokeWidth="1.5"
          />
          <path
            d="M24 9 C28 17, 33 26, 34 34"
            stroke="#F7F4EC"
            strokeWidth="1.5"
          />
          <rect x="22" y="5" width="4" height="4" fill="#F7F4EC" rx="0.5" />
          <circle cx="24" cy="4" r="1.5" fill="#D9C9AA" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
