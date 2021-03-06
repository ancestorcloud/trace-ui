import React, { PropTypes as pt } from 'react'
import { css } from 'glamor'

import { pxToEm, opacity } from '../style/utils'
import { color } from '../style'
import { transformProps } from '../utils'
import { typography, colors } from '../style/settings'

const { keys } = Object

typography.forEach(font => css.fontFace(font))

const baseStyle = css({ lineHeight: 1.4, fontFamily: 'Museo Sans', margin: 0 })

const typeConfig = {
  title: { size: 14, fontWeight: 900, opacity: 0.9 },
  action: {
    size: 14,
    fontWeight: 900,
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none'
  },
  alert: { size: 14, color: colors.lightAlert },
  label: { size: 15, fontWeight: 900, display: 'block' },
  placeholder: { size: 14, color: opacity(colors.darkestTertiary, 0.4) },
  subheading: { size: 14, color: colors.lightPrimary, fontWeight: 900 }
}

/*
  make: {
    p: css({}),
    h1: css({}),
    ...
   }
 */
const styleConfig = keys(typeConfig).reduce(
  (styles, type) => ({
    ...styles,
    [type]: css({
      ...typeConfig[type],
      fontSize: pxToEm(typeConfig[type].size)
    })
  }),
  {}
)

const whiteListedProps = {
  id: id => ({ id }),
  baseRef: ref => ({ ref }),
  onClick: onClick => ({ onClick }),
  children: children => ({ children })
}

const textSizeConfig = {
  tiny: pxToEm(12),
  small: pxToEm(14),
  medium: pxToEm(16),
  large: pxToEm(18),
  giant: pxToEm(20)
}

const textSizing = keys(textSizeConfig).reduce(
  (sizing, size) => ({
    ...sizing,
    [size]: css({ fontSize: textSizeConfig[size] })
  }),
  {}
)

export const Text = (
  { color: clr, size = 'small', opacity: op = 1, ...rest }
) => (
  <span
    {...transformProps(whiteListedProps, rest)}
    {...baseStyle}
    {...color[clr]}
    {...textSizing[size]}
  />
)

const baseHeading = css({
  fontWeight: 900,
  color: colors.darkestTertiary,
  opacity: 0.8
})

const h = {
  1: pxToEm(30),
  2: pxToEm(28),
  3: pxToEm(24),
  4: pxToEm(22),
  5: pxToEm(20)
}

export const Heading = ({ children, level = 1 }) => {
  const Tag = `h${level}`
  return (
    <Tag {...baseStyle} {...baseHeading} style={{ fontSize: h[level] }}>
      {children}
    </Tag>
  )
}

Heading.propTypes = { level: pt.oneOf([ ...keys(h), ...keys(h).map(Number) ]) }

export const Subheading = ({ children }) => (
  <span {...baseStyle} {...styleConfig.subheading}>
    {children}
  </span>
)

export const Alert = ({ children }) => (
  <span {...baseStyle} {...styleConfig.alert}>
    {children}
  </span>
)

const actionStyles = {
  active: css({
    color: colors.primary,
    ':hover': { color: colors.lightPrimary },
    ':active': { color: colors.darkPrimary }
  }),
  passive: css({
    color: colors.darkGrey,
    ':hover': { color: colors.lightGrey },
    ':active': { color: colors.darkestGrey }
  }),
  alert: css({
    color: colors.alert,
    ':hover': { color: colors.lightAlert },
    ':active': { color: colors.darkAlert }
  })
}

export const Action = ({ children, alert, passive, ...rest }) => (
  <span
    role='button'
    tabIndex='0'
    {...transformProps(whiteListedProps, rest)}
    {...baseStyle}
    {...styleConfig.action}
    className={
      passive
        ? actionStyles.passive
        : alert ? actionStyles.alert : actionStyles.active
    }
  >
    {children}
  </span>
)

Action.propTypes = {
  id: pt.string,
  passive: pt.bool,
  alert: pt.bool,
  baseRef: pt.func,
  onClick: pt.func
}

const titleTextSizeConfig = {
  standard: pxToEm(16),
  large: pxToEm(20),
  giant: pxToEm(30)
}

const titleTextSizing = keys(titleTextSizeConfig).reduce(
  (sizing, size) => ({
    ...sizing,
    [size]: css({ fontSize: titleTextSizeConfig[size] })
  }),
  {}
)

export const Title = (
  { children, color: clr = 'darkestTertiary', size = 'standard', ...rest }
) => (
  <span
    {...baseStyle}
    {...color[clr]}
    {...styleConfig.title}
    {...titleTextSizing[size]}
  >
    {children}
  </span>
)

Title.propTypes = {
  color: pt.oneOf(keys(colors)),
  size: pt.oneOf([ 'large', 'giant' ])
}

export const Placeholder = ({ children }) => (
  <span {...baseStyle} {...styleConfig.placeholder}>
    {children}
  </span>
)

const highlightLabel = {
  padding: pxToEm(12),
  width: '100%',
  textAlign: 'center'
}

const labelConfig = {
  default: css({
    color: colors.darkestTertiary,
    opacity: 0.5,
    textTransform: 'uppercase'
  }),
  urgent: css({
    ...highlightLabel,
    color: colors.alert,
    backgroundColor: opacity(colors.alert, 0.1)
  }),
  passive: css({
    ...highlightLabel,
    color: colors.secondary,
    backgroundColor: opacity(colors.secondary, 0.1)
  })
}

export const Label = (
  { head, children, type = 'default', htmlFor, ...rest }
) => (
  <label
    {...transformProps(whiteListedProps, rest)}
    {...{ htmlFor }}
    {...baseStyle}
    {...styleConfig.label}
    {...labelConfig[type]}
  >
    {type === 'default' && children}
    {type !== 'default' && head && (
    <span style={{ textTransform: 'uppercase' }}>
      {`${head}: `}
    </span>
        )}
    {type !== 'default' && children && (
    <span style={{ fontWeight: 500 }}>
      {children}
    </span>
        )}
  </label>
)

Label.propTypes = {
  id: pt.string,
  baseRef: pt.func,
  onClick: pt.func,
  type: pt.oneOf([ 'default', 'urgent', 'passive' ]),
  htmlFor: pt.string
}

const baseP = { color: opacity(colors.darkestTertiary, 0.8) }

const pConfig = {
  default: css({ ...baseP, fontSize: pxToEm(15), lineHeight: 1.4 }),
  compact: css({ ...baseP, fontSize: pxToEm(14) })
}

export const P = ({ children, compact, linkify }) => (
  <p {...baseStyle} {...pConfig[compact ? 'compact' : 'default']}>
    {children}
  </p>
)

P.propTypes = { compact: pt.bool, linkify: pt.bool }

const ts = css({
  fontSize: pxToEm(12),
  color: opacity(colors.darkestTertiary, 0.3)
})

export const Timestamp = ({ children }) => (
  <span {...baseStyle} {...ts}>
    {children}
  </span>
)
