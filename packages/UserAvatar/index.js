import React, { PropTypes as pt } from 'react'

import {pxToEm} from '../style/utils'
import Avatar from './elements/Avatar'
import ConfettiAvatar from './elements/ConfettiAvatar'
import OffsetAvatar from './elements/OffsetAvatar'

// const defaultUser = {
//   id: '123',
//   firstName: '',
//   lastName: '',
//   avatar: {
//     thumb: '',
//     norma: ''
//   }
// }

const themes = ['red', 'blue', 'green', 'orange']
const possibleSeedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const determineTheme = seed => {
  const seedPosition = possibleSeedValues.indexOf(seed.charAt(seed.length - 1))
  const seedPositionDecimal = seedPosition / possibleSeedValues.length
  const colorPosition = Math.floor(seedPositionDecimal * themes.length)
  return themes[colorPosition]
}

const DefaultAvatar = ({size, seed}) => {
  const theme = determineTheme(seed)
  return size === 'small'
    ? <ConfettiAvatar size={sizing.small} theme={theme} />
    : <OffsetAvatar size={sizing.large} theme={theme} />
}

const sizing = {small: pxToEm(38), large: pxToEm(125)}
const UserAvatar = ({user, size = 'small'}) => {
  const {avatar, id} = user

  const src = size === 'small'
    ? avatar && avatar.thumb
    : avatar && avatar.normal

  return src
    ? <Avatar {...{src, size: sizing[size]}} />
    : <DefaultAvatar size={size} seed={id}/>
}

UserAvatar.propTypes = {
  size: pt.oneOf(['small', 'big']),
  user: pt.shape({
    avatar: pt.shape({
      thumb: pt.string,
      normal: pt.string
    }).isRequired,
    id: pt.string.isRequired
  })
}

export default UserAvatar
