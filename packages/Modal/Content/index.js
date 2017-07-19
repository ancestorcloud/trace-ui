import React, {PropTypes as pt} from 'react'
import { css } from 'glamor'
import Base from '../shared/Base'
import Close from '../shared/Close'

import { colors } from '../../style/settings'
import { pxToEm } from '../../style/utils'

import { Col, Row, Box } from '../../Layout'
import { Action, Title } from '../../Text'
import Button from '../../Button'

const Justify = ({Left, Right}) =>
  <Row x y space='between'>
    {Left} {Right}
  </Row>

const h = {
  modal: 401,
  head: 55
}

const ContentModal = ({
  title,
  primaryCopy = 'Ok',
  onPrimaryClick,
  altCopy = 'Close',
  onAltClick,
  onRequestClose,
  children,
  card
}) => {
  const width = pxToEm(card ? 364 : 572)
  const Alt = <Action passive onClick={onAltClick || onRequestClose}>{altCopy}</Action>
  const Primary = onPrimaryClick
    ? <Button onClick={onPrimaryClick} small={card}>{primaryCopy}</Button>
    : <div/>

  return (
    <Base isOpen {...{onRequestClose, width}}>
      <Row y space='between' px height={pxToEm(h.head)} {...css({
        backgroundColor: colors.tertiary,
        position: 'relative'
      })}>
        <Title big color={'white'}>{title}</Title>
        <Close onClick={onRequestClose} />
      </Row>

      <Col p='+' {...css({overflowWrap: 'break-word'})}>
        <Box {...css({marginBottom: 'auto'})}>
          {children}
        </Box>
        <Box pt {...css({marginTop: 'auto'})}>
          <Justify Left={Alt} Right={Primary} />
        </Box>
      </Col>
    </Base>
  )
}

ContentModal.propTypes = {
  card: pt.bool,
  theme: pt.oneOf(['confirm', 'alert']),
  justify: pt.bool
}

export default ContentModal
