import React from 'react'
import { css } from 'glamor'
import { CloseIcon as Cl } from '../../../icons'
import { pxToEm } from '../../../style/utils'

const close = css({
  cursor: 'pointer',
  transition: '.25s',
  ':hover': { transform: 'scale(1.1)' }
})

const size = sz => css({ width: pxToEm(sz), height: pxToEm(sz) })

const Close = ({ onClick, size: sz = 20 }) => (
  <div {...{ onClick }} {...size(sz)} {...close}>
    <Cl size='100%' />
  </div>
)

export default Close
