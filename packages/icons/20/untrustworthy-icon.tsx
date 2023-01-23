import { Circle, Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgUntrustworthyIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={10}
        cy={10}
        r={6.75}
        fill="#E65F5C"
        stroke="#E65F5C"
        strokeWidth={1.3}
      />
      <Path d="M10 12V6M10 14v-1" stroke="#fff" strokeWidth={1.3} />
    </Svg>
  )
}
export default SvgUntrustworthyIcon