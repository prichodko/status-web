import type { SVGProps } from 'react'

const SvgSyncingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 1.9a4.1 4.1 0 0 0-3.7 5.868A4.1 4.1 0 0 0 2.4 11.5h1.2c0-1.371.952-2.522 2.232-2.823l.891-.21-.548-.733a2.9 2.9 0 1 1 4.98-2.901l.201.455.484-.113a2.9 2.9 0 0 1 3.499 3.419l-.068.326.24.23c.587.561.889 1.2.889 1.85h.6-.6a3.4 3.4 0 0 1-3.4 3.4H6.622l2.268-1.944-.78-.912-3.5 3-.532.456.532.456 3.5 3 .78-.912L6.622 15.6H13a4.6 4.6 0 0 0 4.6-4.6c0-.94-.396-1.791-1.032-2.486a4.1 4.1 0 0 0-4.53-4.588A4.098 4.098 0 0 0 8.5 1.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSyncingIcon
