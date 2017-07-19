import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {Row} from '../Layout'
import {CelebrateIcon, AlertIcon, CloseIcon, Wordmark, LogoMark} from './index'

storiesOf('icons', module)
  .add('CelebrateIcon', () => (
    <Row p='0'>
      <CelebrateIcon size={100} />
      <CelebrateIcon size={300} />
    </Row>
  ))
  .add('AlertIcon', () => (
    <Row p='0'>
      <AlertIcon size={100} />
      <AlertIcon size={300} />
    </Row>
  ))
  .add('CloseIcon', () => (
    <Row p='0'>
      <CloseIcon size={100} color='blue' />
      <CloseIcon size={300} color='#ccc'/>
    </Row>
  ))
  .add('Wordmark', () => (
    <Row p='0'>
      <Wordmark size={100} color='blue' />
      <Wordmark size={300} color='#ccc'/>
      <Wordmark />
    </Row>
  ))
  .add('LogoMark', () => (
    <Row p='0'>
      <LogoMark size={100}/>
      <LogoMark size={300}/>
      <LogoMark />
    </Row>
  ))
