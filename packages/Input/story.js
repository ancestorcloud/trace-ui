import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'

storiesOf('Input', module).add('basic', () => (
  <div>
    <Input placeholder='hi' />
  </div>
)).add('required', () => (
  <div>
    <Input required />
  </div>
)).add('error', () => (
  <div>
    <Input error />
  </div>
)).add('error required', () => (
  <div>
    <Input error required />
  </div>
))
