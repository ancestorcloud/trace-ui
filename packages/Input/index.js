import React, { PropTypes as pt } from 'react'
import { css } from 'glamor'

import { pxToEm, opacity } from '../style/utils'
import { fonts, colors } from '../style/settings'
import { normalize } from '../style'

const requiredTag = (
  <div {...css({ position: 'absolute', top: 0, right: 1 })}>
    <svg
      width='20px'
      height='19px'
      viewBox='0 0 20 19'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-799.000000, -672.000000)'>
          <g transform='translate(591.000000, 579.000000)'>
            <g id='required' transform='translate(0.000000, 93.666667)'>
              <g transform='translate(208.000000, 0.000000)'>
                <path
                  d='M0,0 L17.0057979,0 C18.6594501,0 20,1.35292554 20,2.99253976 L20,18 L0,0 Z'
                  fill='#A2B2C0'
                />
                <polygon
                  fill='#FFFFFF'
                  points='13.0801326 8.59 14.4435809 6.52734748 14.4785411 6.52734748 15.8245093 8.59 17.0655968 7.68103448 15.5273475 5.75822281 15.5273475 5.7232626 17.922122 5.07649867 17.4501592 3.60816976 15.1078249 4.48217507 15.2476658 2 13.6569761 2 13.7793369 4.48217507 11.4544828 3.60816976 11 5.07649867 13.3772944 5.7232626 13.3772944 5.75822281 11.821565 7.68103448'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
)

export const Input = ({ required, error: e, ...rest }) => (
  <div {...container}>
    {required && requiredTag}
    <input
      {...rest}
      {...normalize}
      {...base}
      {...font}
      {...border}
      className={`${e ? err : ''}`}
    />
  </div>
)

Input.propTypes = { required: pt.bool, error: pt.bool, success: pt.bool }

export const Select = ({ error: e, ...rest }) => (
  <div {...container}>
    <select
      {...rest}
      {...normalize}
      {...base}
      {...font}
      {...border}
      className={`${e ? err : ''}`}
    />
  </div>
)

Select.propTypes = { error: pt.bool, success: pt.bool }

export default Input

const container = css({
  position: 'relative',
  height: pxToEm(40),
  maxHeight: pxToEm(45),
  maxWidth: pxToEm(228),
  minWidth: pxToEm(228)
})

const base = css({
  width: '100%',
  height: '100%',
  borderRadius: pxToEm(5),
  transition: '.25s'
})

const font = css({
  fontFamily: fonts.primary,
  fontSize: pxToEm(15),
  color: opacity(colors.darkTertiary, 0.8),
  textIndent: pxToEm(10),
  fontWeight: 300
})

const border = css({
  border: `solid 1px #DCDCDC`,
  ':focus': { border: `solid 1px ${colors.secondary}` }
})

const err = css({
  fontWeight: 300,
  color: colors.alert,
  backgroundColor: opacity(colors.alert, 0.2),
  border: `solid 1px ${colors.alert}`,
  ':focus': { border: `solid 1px ${colors.alert}` }
})
