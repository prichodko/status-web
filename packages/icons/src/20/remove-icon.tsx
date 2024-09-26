import type { SVGProps } from 'react'

const SvgRemoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 10.6h-13V9.4h13v1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgRemoveIcon