import type { SVGProps } from 'react'

const SvgDarkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.358 11.358.636.135.208-.979-.98.208.136.636ZM8.642 3.642l.636.135.208-.979-.98.208.136.636Zm7.58 7.08A5.876 5.876 0 0 1 15 10.85v1.3c.511 0 1.011-.054 1.493-.156l-.27-1.272ZM15 10.85A5.85 5.85 0 0 1 9.15 5h-1.3A7.15 7.15 0 0 0 15 12.15v-1.3ZM9.15 5c0-.42.044-.829.128-1.223l-1.272-.27A7.176 7.176 0 0 0 7.85 5h1.3Zm-5 5c0-2.81 1.983-5.16 4.627-5.722l-.27-1.272A7.152 7.152 0 0 0 2.85 10h1.3ZM10 15.85A5.85 5.85 0 0 1 4.15 10h-1.3A7.15 7.15 0 0 0 10 17.15v-1.3Zm5.722-4.627A5.852 5.852 0 0 1 10 15.85v1.3a7.152 7.152 0 0 0 6.994-5.657l-1.272-.27Z"
    />
  </svg>
)
export default SvgDarkIcon
