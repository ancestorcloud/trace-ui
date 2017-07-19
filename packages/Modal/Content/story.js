import React from 'react'
import Modal from './index'
import { storiesOf, action } from '@kadira/storybook'

const Container = ({children}) =>
  <div style={{maxWidth: '350px', border: 'dashed 1px pink', height: '500px'}}>
    {children}
  </div>

const actions = {
  onRequestClose: action('close'),
  onAltClick: action('alt'),
  onPrimaryClick: action('primary')
}
storiesOf('Content Modal', module)
  .add('basic', () =>
    <Container>
      <Modal {...actions} title='Content Modal'>
        Juniper
      </Modal>
      background content
    </Container>
  )
  .add('card', () =>
    <Container>
      <Modal card {...actions}>
        <p>This is super basic content</p>
      </Modal>
      background content
    </Container>
  )
  .add('no primary', () =>
    <Container>
      <Modal card {...{...actions, onPrimaryClick: null}}/>
      background content
    </Container>
  )
  .add('long content', () =>
    <Container>
      <Modal card {...actions}>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
        <div>hey</div>
        <div>ho</div>
        <div>let's go</div>
        <div>[][][][][][][][][][][]</div>
      </Modal>

      background content
    </Container>
  )
  .add('wide content', () =>
    <Container>
      <Modal card {...actions}>
        http://localhost:9002/?selectedKind=Content%20Modal&selectedStory=card&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
      </Modal>
      background content
    </Container>
  )
