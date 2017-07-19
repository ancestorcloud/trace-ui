import React, { PropTypes as pt } from 'react'

import { colors } from '../../..//style/settings'

const confettiThemes = {
  blue: {
    bgClr: colors.primary,
    accentClr: colors.secondary
  },
  orange: {
    bgClr: colors.accent,
    accentClr: colors.grey
  },
  green: {
    bgClr: colors.secondary,
    accentClr: colors.lightestTertiary
  },
  red: {
    bgClr: colors.alert,
    accentClr: colors.primary
  }
}

const Small = ({size, bgClr, accentClr}) =>
  <svg width={size} height={size} viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'>
    <title>Avatar Blue</title>
    <defs>
      <circle id='a' cx='19' cy='19' r='19'/>
      <path id='c' d='M3.992.079H.17v3.3h3.822V.08z'/>
      <path id='e' d='M0 38.872h34.757V.779H0z'/>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='b' fill='#fff'><use href='#a'/></mask>
      <use fill={bgClr} href='#a'/>
      <g mask='url(#b)'>
        <g transform='translate(3.8 .95)'>
          <path d='M11.614 20.452a1.5 1.5 0 0 1-1.503 1.498 1.5 1.5 0 0 1-1.5-1.498 1.5 1.5 0 0 1 1.5-1.498 1.5 1.5 0 0 1 1.503 1.498z' fill={accentClr}/>
          <g transform='translate(5.468 .7)'>
            <mask id='d' fill='#fff'><use href='#c'/></mask>
            <path fill={accentClr} mask='url(#d)' d='M3.037.078l.955 1.651-.955 1.65H1.126L.17 1.73 1.126.08z'/>
          </g>
          <path fill={accentClr} d='M15.609 6.584l1.014 1.752-1.014 1.751H13.58l-1.015-1.751 1.015-1.752z'/>
          <mask id='f' fill='#fff'><use href='#e'/></mask>
          <path fill={accentClr} mask='url(#f)' d='M31.12 16.948h2.71v-2.702h-2.71zm-9.276 5.685l-1.457-2.28 2.286-1.452 1.456 2.28zM5.218 33.424l-3.17-1.59 1.593-3.166 3.169 1.59zM25.56 6.57l2.136 3.708-5.475-1.026zM0 21.603L2.144 17.9l1.858 5.237zm29.188 5.089a1.5 1.5 0 0 1-1.502 1.498 1.5 1.5 0 0 1-1.501-1.498 1.5 1.5 0 0 1 1.501-1.498 1.5 1.5 0 0 1 1.502 1.498m-12.99-11.969l2.074 2.07M3.286 12.567l2.595-1.363m13.641-8.202L17.447.932m-1.299 28.919l-.979-2.758M31.119 33l-2.93.145m6.568 5.727l-1.856-2.266'/>
          <path d='M20.13 10.34a.771.771 0 0 0-.769-.773h-2.465V8.373a.771.771 0 0 0-.769-.773h-3.27a.77.77 0 0 0-.768.773v1.194h-.87a.771.771 0 0 0-.769.773v3.286c0 .427.345.773.77.773h.869v8.135c0 3.462 2.791 6.267 6.235 6.267h1.026c.425 0 .77-.346.77-.773v-3.286a.771.771 0 0 0-.77-.773h-1.026a1.431 1.431 0 0 1-1.428-1.435V14.4h2.465c.425 0 .77-.346.77-.773V10.34z' fill='#FFF' mask='url(#f)'/>
        </g>
      </g>
    </g>
  </svg>

const ConfettiAvatar = ({size = 38, theme = 'blue'}) =>
  <Small {...confettiThemes[theme]} {...{size}} />

ConfettiAvatar.propTypes = {
  size: pt.string,
  theme: pt.oneOf(['blue', 'orange', 'green', 'red'])
}

export default ConfettiAvatar
