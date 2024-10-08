import type { SVGProps } from 'react'

const SvgReorderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.11 16.456-3.5-3 .78-.912 2.51 2.151V4h1.2v10.696l2.51-2.152.78.912-3.5 3-.39.335-.39-.335Zm-2.72-9.912-3.5-3-.39-.335-.39.335-3.5 3 .78.912L5.9 5.304V16h1.2V5.304l2.51 2.152.78-.912Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgReorderIcon
