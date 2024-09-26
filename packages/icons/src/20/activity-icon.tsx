import type { SVGProps } from 'react'

const SvgActivityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.565 12.192a2.1 2.1 0 1 1 2.97-2.97l1.672 1.672 2.707-2.667-1.692-1.692a2.1 2.1 0 1 1 2.97-2.97l.285.285a2.6 2.6 0 0 1 3.674 3.674l.284.284a2.1 2.1 0 0 1-2.97 2.97l-1.703-1.703-2.706 2.668 1.722 1.722a2.1 2.1 0 0 1-2.97 2.97l-.284-.284a2.6 2.6 0 0 1-3.674-3.674l-.285-.285Zm8.062-7.495.424.424 2.828 2.829.425.424.282.282a.9.9 0 1 1-1.273 1.273l-4.242-4.242a.9.9 0 1 1 1.273-1.273l.283.283ZM15.3 6.675A1.4 1.4 0 0 0 13.326 4.7l1.975 1.975ZM4.414 10.07a.9.9 0 0 0 0 1.273l4.242 4.242a.9.9 0 1 0 1.273-1.273l-4.242-4.242a.9.9 0 0 0-1.273 0Zm.285 3.255a1.4 1.4 0 0 0 1.975 1.975L4.7 13.326Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgActivityIcon