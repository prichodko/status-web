import { createIcon } from '../lib/create-icon'

const SvgHidePasswordIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M10 13.85c-2.298 0-4.156-1.034-5.463-2.103a11.807 11.807 0 0 1-1.495-1.465 9.541 9.541 0 0 1-.476-.605l-.02-.031-.005-.007L2 10l-.54.361v.002l.004.004.008.013.031.045.115.157c.099.133.244.32.434.543.379.444.937 1.036 1.661 1.628.43.352.922.707 1.473 1.032l-.79 1.973 1.207.483.745-1.862a9.219 9.219 0 0 0 3.002.748V17h1.3v-1.873a9.204 9.204 0 0 0 3.001-.748l.745 1.862 1.207-.482-.789-1.974c.55-.325 1.043-.68 1.473-1.032a13.099 13.099 0 0 0 1.66-1.628 10.848 10.848 0 0 0 .55-.7l.03-.045.01-.013.002-.004.001-.001L18 10l-.54-.36-.005.006-.021.03-.094.129a9.532 9.532 0 0 1-.382.477c-.34.399-.843.932-1.495 1.465-1.306 1.07-3.165 2.103-5.463 2.103Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgHidePasswordIcon
