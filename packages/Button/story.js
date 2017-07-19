import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './index'

storiesOf('Button', module)
  .add('primary', () => (
    <div>
      <Button>Hello</Button>
      <Button small>small</Button>
    </div>
  ))
  .add('secondary', () => (
    <div>
      <Button theme='secondary'>Hello</Button>
      <Button theme='secondary' small>small</Button>
    </div>
  ))
  .add('alert', () => (
    <div>
      <Button theme='alert'>Alert</Button>
      <Button theme='alert' small>small</Button>
    </div>
  ))
  .add('text', () => (
    <div>
      <Button theme='text'>Alert</Button>
      <Button theme='text' small>small</Button>
    </div>
  ))
