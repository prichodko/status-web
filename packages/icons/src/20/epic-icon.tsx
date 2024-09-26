import type { SVGProps } from 'react'

const SvgEpicIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_3564_944)">
      <path
        fill="currentColor"
        d="M4.84 15V4.09h6.585v1.173H6.162v3.686h4.922v1.172H6.162v3.707h5.348V15H4.84Zm9.576-1.396a.923.923 0 0 1-.676-.282.923.923 0 0 1-.283-.676c0-.263.095-.489.283-.677a.923.923 0 0 1 .676-.282c.263 0 .489.094.677.282a.923.923 0 0 1 .282.677.903.903 0 0 1-.133.479.995.995 0 0 1-.346.352.914.914 0 0 1-.48.127Zm0-5.518a.923.923 0 0 1-.676-.282.923.923 0 0 1-.283-.677c0-.263.095-.488.283-.676a.923.923 0 0 1 .676-.283c.263 0 .489.094.677.283a.923.923 0 0 1 .282.676.903.903 0 0 1-.133.48.994.994 0 0 1-.346.351.914.914 0 0 1-.48.128Z"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3564_944">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgEpicIcon