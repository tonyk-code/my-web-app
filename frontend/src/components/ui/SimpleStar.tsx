export default function SimpleStar({
  type = "full",
  size = 24,
  color = "#FFD700",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {type === "full" && (
        <path
          fill={color}
          d="M12 2l2.99 6.07L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.01-1.2L12 2z"
        />
      )}

      {type === "empty" && (
        <path
          stroke={color}
          strokeWidth="1"
          fill="none"
          d="M12 2l2.99 6.07L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.01-1.2L12 2z"
        />
      )}

      {type === "half" && (
        <>
          <clipPath id="half-star">
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>

          <path
            clipPath="url(#half-star)"
            fill={color}
            d="M12 2l2.99 6.07L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.01-1.2L12 2z"
          />

          <path
            stroke={color}
            strokeWidth="1"
            fill="none"
            d="M12 2l2.99 6.07L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.01-1.2L12 2z"
          />
        </>
      )}
    </svg>
  );
}
