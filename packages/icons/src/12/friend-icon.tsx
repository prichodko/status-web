import type { SVGProps } from 'react'

const SvgFriendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.05 2.5a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0ZM6 .45a2.05 2.05 0 1 0 0 4.1 2.05 2.05 0 0 0 0-4.1Zm2.94 10H3.06c.065-1.685.43-2.625.888-3.15.487-.558 1.17-.75 2.052-.75.881 0 1.565.192 2.051.75.459.525.824 1.465.889 3.15ZM6 5.45c-1.028 0-2.094.225-2.88 1.126-.767.878-1.17 2.292-1.17 4.424v.55h8.1V11c0-2.132-.403-3.546-1.17-4.424C8.094 5.675 7.028 5.45 6 5.45Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFriendIcon