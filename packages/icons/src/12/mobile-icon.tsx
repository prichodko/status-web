import type { SVGProps } from 'react'

const SvgMobileIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.55 6c0-1.122.032-1.962.127-2.598.095-.639.246-1.009.436-1.241.179-.218.441-.375.903-.475.476-.104 1.11-.136 1.984-.136.874 0 1.509.032 1.985.136.461.1.724.257.902.475.19.232.341.602.436 1.24.095.637.127 1.477.127 2.599s-.032 1.962-.127 2.598c-.095.639-.246 1.009-.436 1.241-.178.218-.441.375-.902.475-.476.104-1.111.136-1.985.136-.873 0-1.508-.032-1.984-.136-.462-.1-.724-.257-.903-.475-.19-.232-.34-.602-.436-1.24C2.582 7.961 2.55 7.121 2.55 6ZM6 .45c-.876 0-1.616.03-2.218.16-.617.135-1.136.385-1.52.854-.372.455-.565 1.054-.673 1.775C1.481 3.962 1.45 4.872 1.45 6c0 1.128.031 2.038.14 2.76.107.722.3 1.32.672 1.776.384.47.903.719 1.52.853.602.13 1.342.161 2.218.161.877 0 1.616-.03 2.218-.161.617-.134 1.136-.384 1.52-.853.373-.455.566-1.054.673-1.775.108-.723.14-1.633.14-2.761 0-1.128-.032-2.038-.14-2.761-.107-.721-.3-1.32-.673-1.775-.384-.47-.903-.719-1.52-.853C7.616.48 6.877.45 6 .45Zm-1.5 3.6h3v-1.1h-3v1.1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMobileIcon
