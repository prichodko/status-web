import type { SVGProps } from 'react'

const SvgBridgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.6 4.924c.623.646 1.554 1.176 2.9 1.176V4.9c-1.257 0-1.961-.611-2.376-1.233a3.769 3.769 0 0 1-.53-1.251l-.002-.015h-1.184v.001l-.003.017a4.154 4.154 0 0 1-.096.374c-.077.252-.2.58-.39.905C9.542 4.344 8.958 4.9 8 4.9c-.958 0-1.542-.556-1.92-1.202a4.336 4.336 0 0 1-.485-1.279l-.003-.017V2.4H4.408v-.002.002l-.003.015-.016.074a3.767 3.767 0 0 1-.513 1.177C3.46 4.29 2.757 4.9 1.5 4.9v1.2c1.346 0 2.276-.53 2.9-1.176V8.4H2v1.2h2.4v3.9h1.2V9.6h4.8v3.9h1.2V9.6H14V8.4h-2.4V4.924Zm-1.2.132A3.18 3.18 0 0 1 8 6.1a3.18 3.18 0 0 1-2.4-1.044V8.4h4.8V5.056Zm.008-2.656Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBridgeIcon