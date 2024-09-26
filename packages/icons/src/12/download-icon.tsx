import type { SVGProps } from 'react'

const SvgDownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m6.55 7.288 3.088-2.702.724.828-4 3.5L6 9.23l-.363-.317-4-3.5.725-.828L5.45 7.288V1.5h1.1v5.788ZM9.5 11.05h-7v-1.1h7v1.1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgDownloadIcon