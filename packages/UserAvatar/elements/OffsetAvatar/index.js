import React, { PropTypes as pt } from 'react'

import { colors } from '../../..//style/settings'

const offsetThemes = {
  blue: colors.primary,
  orange: colors.accent,
  green: colors.secondary,
  red: colors.alert
}

const OffsetAvatar = ({size = 128, theme = 'blue'}) =>
  <svg width={size} height={size} viewBox='0 0 129 130' xmlns='http://www.w3.org/2000/svg'>
    <title>Avatar Orange Large</title>
    <g transform='translate(2 2)' fill='none' fillRule='evenodd'>
      <circle fill={offsetThemes[theme]} cx='64.5' cy='65.5' r='62.5'/>
      <circle stroke='#4C708F' strokeWidth='4' cx='62.5' cy='62.5' r='62.5'/>
      <path d='M77.83 49.796v-10.55a2.477 2.477 0 0 0-2.47-2.482h-7.914v-3.832a2.475 2.475 0 0 0-2.47-2.482H54.48a2.475 2.475 0 0 0-2.469 2.482v3.832H49.22a2.477 2.477 0 0 0-2.47 2.482v10.55a2.477 2.477 0 0 0 2.47 2.483h2.791v26.118c0 11.112 8.962 20.12 20.018 20.12h3.295c1.365 0 2.47-1.11 2.47-2.481v-10.55a2.475 2.475 0 0 0-2.47-2.483h-3.295c-2.531 0-4.583-2.063-4.583-4.606V52.279h7.913a2.477 2.477 0 0 0 2.47-2.483' fill='#FFF'/>
    </g>
  </svg>

OffsetAvatar.propTypes = {
  size: pt.number,
  theme: pt.oneOf(['blue', 'orange', 'green', 'red'])
}

export default OffsetAvatar
