import React, { PropTypes as pt } from 'react'

import { css } from 'glamor'

import { size } from '../../../style/utils'

/**
 * 1. When border-radius is left up to this component's parent
 *    is causes flickering when you right click in Chrome.
 */
const style = css({ position: 'relative', borderRadius: '50%' /* 1 */ })

const Avatar = ({ src, size: sz, alt }) => (
  <img {...{ src, alt }} {...style} style={size(sz)} />
)

Avatar.propTypes = {
  src: pt.string.isRequired,
  alt: pt.string.isRequired,
  size: pt.string
}

export default Avatar
