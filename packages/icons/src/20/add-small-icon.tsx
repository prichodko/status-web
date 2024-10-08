import type { SVGProps } from 'react'

const SvgAddSmallIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={10} cy={10} r={7} stroke="#A1ABBD" strokeWidth={1.2} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.6 9.4V6.5H9.4v2.9H6.5v1.2h2.9v2.9h1.2v-2.9h2.9V9.4h-2.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAddSmallIcon
