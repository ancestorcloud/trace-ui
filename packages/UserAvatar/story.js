import React from 'react'
import { storiesOf } from '@kadira/storybook'
import UserAvatar from './index'
import Avatar from './elements/Avatar'
import ConfettiAvatar from './elements/ConfettiAvatar'
import OffsetAvatar from './elements/OffsetAvatar'

const defaultUser = {
  id: 'f',
  firstName: '',
  lastName: '',
  avatar: { thumb: '', normal: '' }
}

const avatar = {
  thumb: 'https://photos.peterhurley.com/sites/default/files/styles/big/public/photos/2015/03/44/laura%C2%A9peterhurley.jpg?itok=01RvL2nw',
  normal: 'https://photos.peterhurley.com/sites/default/files/styles/big/public/photos/2015/03/44/laura%C2%A9peterhurley.jpg?itok=01RvL2nw'
}

storiesOf('Avatar', module)
  .add('small', () => (
    <Avatar
      size='64px'
      src='https://s-media-cache-ak0.pinimg.com/originals/43/67/83/4367838485be5213824bdd0e1d2ed2a5.gif'
      alt='Sylveon gif'
    />
  ))
  .add('defaults: confetti', () => (
    <div>
      <ConfettiAvatar size={95} />
      <ConfettiAvatar theme='orange' />
      <ConfettiAvatar theme='green' size={72} />
      <ConfettiAvatar theme='red' />
    </div>
  ))
  .add('defaults: offset', () => (
    <div>
      <OffsetAvatar />
      <OffsetAvatar theme='green' />
      <OffsetAvatar theme='orange' />
      <OffsetAvatar theme='red' />
    </div>
  ))
  .add('user avatar', () => (
    <div>
      <UserAvatar user={defaultUser} />
      <UserAvatar user={{ ...defaultUser, avatar }} size='medium' />
      <UserAvatar user={{ ...defaultUser, avatar }} size='small' />
      <UserAvatar user={defaultUser} size='large' />
      <UserAvatar user={defaultUser} size='medium' />
      <UserAvatar user={{ ...defaultUser, avatar }} size='large' />
    </div>
  ))
