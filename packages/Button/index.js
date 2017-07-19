import React, { PropTypes as pt } from 'react'
import { css } from 'glamor'

import { transformProps } from '../utils'
import { pxToEm } from '../style/utils'
import { colors, fonts } from '../style/settings'
import { normalize } from '../style'

const baseStyle = css({
  borderRadius: '50px',
  transition: '.25s ease',
  fontFamily: fonts.primary,
  fontWeight: 900
})

const sizing = {
  big: css({
    height: pxToEm(48),
    width: pxToEm(194),
    fontSize: '14px'
  }),
  small: css({
    height: pxToEm(40),
    width: pxToEm(138),
    fontSize: '13px'
  })
}

const createTheme = ({primary, light, dark}) => css({
  color: colors.white,
  backgroundColor: primary,
  ':hover': {
    backgroundColor: light
  },
  ':active': {
    backgroundColor: dark
  }
})

const theme = {
  primary: createTheme({
    primary: colors.primary,
    light: colors.lightPrimary,
    dark: colors.darkPrimary
  }),

  secondary: createTheme({
    primary: colors.tertiary,
    light: colors.lightTertiary,
    dark: colors.darkTertiary
  }),

  alert: createTheme({
    primary: colors.alert,
    light: colors.lightAlert,
    dark: colors.darkAlert
  }),

  text: css({
    color: colors.darkGrey,
    backgroundColor: 'transparent',
    ':hover': {
      color: colors.grey
    },
    ':active': {
      color: colors.darkestGrey
    }
  })
}

const whiteListedProps = {
  id: value => ({id: value}),
  baseRef: value => ({ref: value}),
  onClick: onClick => ({onClick}),
  type: type => ({type})
}

const Button = ({
  theme: th = 'primary',
  small,
  children,
  ...rest
}) =>
  <button
    {...transformProps(whiteListedProps, rest)}
    {...normalize} {...baseStyle} {...theme[th]} {...sizing[small ? 'small' : 'big']}
  >
    {children}
  </button>

Button.propTypes = {
  children: pt.string.isRequired,
  theme: pt.oneOf(['primary', 'secondary', 'alert', 'text']),
  small: pt.bool
}

export default Button
