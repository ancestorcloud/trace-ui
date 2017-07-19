import React from 'react'
import Modal from './index'
import { storiesOf, action } from '@kadira/storybook'

const Container = ({children}) =>
  <div style={{maxWidth: '350px', border: 'dashed 1px pink', height: '500px'}}>
    {children}
  </div>

storiesOf('Confirmation Modal', module)
  .add('centered', () =>
    <Container>
      <Modal
        onRequestClose={action('close modal')}
        head='We be ballin'
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      />
      background content
    </Container>
  )
  .add('justified', () =>
    <Container>
      <Modal onRequestClose={action('close modal')} justify
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      />
      background content
    </Container>
  )
  .add('centered alert', () =>
    <Container>
      <Modal onRequestClose={action('close modal')} theme='alert'
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      />
      background content
    </Container>
  )
  .add('justified alert', () =>
    <Container>
      <Modal onRequestClose={action('close modal')} justify theme='alert'
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      />
      background content
    </Container>
  )
  .add('custom', () =>
    <Container>
      <Modal onRequestClose={action('close modal')} justify
        subhead='you so fancy'
        Artwork={() => <img width='100px' style={{borderRadius: '50%'}} src='http://www.photoclip.net/cinemagraph/files/2012/08/120521-3-marbles.gif' />}
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      />
      background content
    </Container>
  )
  .add('centered w/ content', () =>
    <Container>
      <Modal
        onRequestClose={action('close modal')}
        head='We be ballin'
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      >
        <div>
          <div>
            put in info and stuff
          </div>
          <input />
          <div>
            put in more info and stuff
          </div>
          <input />
        </div>
      </Modal>
      background content
    </Container>
  )
  .add('justified w/ content', () =>
    <Container>
      <Modal justify
        onRequestClose={action('close modal')}
        head='We be ballin'
        body='This is basic modal body text. It should be only a few sentances long, at worst. If it’s too long, it won’t look right. Too short is fine. It’s like goldilocks, we’re trying to find the perfect “porridge” text length.'
      >
        <div>
          <div>
            put in info and stuff
          </div>
          <input />
          <div>
            put in more info and stuff
          </div>
          <input />
        </div>
      </Modal>
      background content
    </Container>
  )
