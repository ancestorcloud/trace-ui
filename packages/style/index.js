import { css } from 'glamor'
import { colors } from './settings'

export const color = Object
  .keys(colors)
  .reduce((map, key) => ({ ...map, [key]: css({ color: colors[key] }) }), {})

export const normalize = css({
  display: 'inline-block',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  textDecoration: 'none'
})

export const cursor = {
  pointer: css({ cursor: 'pointer' }),
  text: css({ cursor: 'text' })
}
