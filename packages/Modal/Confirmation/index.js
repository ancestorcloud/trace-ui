import React, { PropTypes as pt } from 'react'
import { css } from 'glamor'
import Base from '../shared/Base'
import Close from '../shared/Close'

import { colors } from '../../style/settings'
import { pxToEm } from '../../style/utils'

import { AlertIcon, CelebrateIcon } from '../../icons'
import { Col, Row, Box } from '../../Layout'
import { Heading, P, Subheading } from '../../Text'
import Button from '../../Button'

const Stack = ({ Top, Bottom }) => (
  <Col x>
    <Box mb='-'>{Top}</Box>
    {Bottom}
  </Col>
)

const Justify = ({ Left, Right }) => (
  <Row x y space='between' mb>
    {Left} {Right}
  </Row>
)

const artwork = {
  alert: () => (
    <Box pl='++'>
      <AlertIcon />
    </Box>
  ),
  celebrate: () => (
    <Box pr='+'>
      <CelebrateIcon size={150} />
    </Box>
  )
}

const Modal = (
  {
    theme = 'celebrate',
    Artwork: Aw,
    justify,
    head = 'Confirm Action',
    subhead,
    body,
    primaryCopy = 'Confirm',
    onPrimaryClick,
    altCopy = 'Close',
    onAltClick,
    onRequestClose,
    children,
    overlayBackgroundColor
  }
) => {
  const Alt = (
    <Button theme='text' onClick={onAltClick || onRequestClose}>
      {altCopy}
    </Button>
    )
  const Primary = (
    <Button
      onClick={onPrimaryClick}
      theme={theme === 'alert' ? 'alert' : 'primary'}
      >
      {primaryCopy}
    </Button>
    )
  const Artwork = Aw || artwork[theme]

  return (
    <Base
      isOpen
      onRequestClose={onRequestClose}
      overlayBackgroundColor={overlayBackgroundColor}
      width={pxToEm(572)}
      maxWidth={pxToEm(572)}
      >
      <Box minHeight={pxToEm(100)} {...header} {...center}>
        <div onClick={onRequestClose} {...topRight}>
          <Close size={20} />
        </div>
        <div className={css({ transform: `translateY(25px)` })}>
          <Artwork />
        </div>
      </Box>
      <Box p='+'>
        <Box my {...center}>
          <Heading level={3}>{head}</Heading>
          {subhead && <Subheading>{subhead}</Subheading>}
        </Box>
        <Box my {...center}>
          <P>{body}</P>
        </Box>
        {children}
        <Box pt>
          {
              justify
                ? <Justify Left={Alt} Right={Primary} />
                : <Stack Top={Primary} Bottom={Alt} />
            }
        </Box>
      </Box>
    </Base>
  )
}

Modal.propTypes = {
  theme: pt.oneOf([ 'celebrate', 'alert' ]),
  justify: pt.bool
}

const center = css({ textAlign: 'center' })

const header = css({ backgroundColor: colors.tertiary, position: 'relative' })

const topRight = css({
  position: 'absolute',
  right: 10,
  top: 15,
  // otherwise it get's placed behind the artwork
  zIndex: 1
})

export default Modal
