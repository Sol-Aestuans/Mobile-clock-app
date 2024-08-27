import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function ArrowUpIcon(props) {
  return (
    <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd" >
        <Circle fill="#303030" cx={20} cy={20} r={20}  />
        <Path stroke="#FFF" strokeWidth={2} d="M14 23l6-6 6 6"  />
      </G>
    </Svg>
  )
}

export default ArrowUpIcon;
