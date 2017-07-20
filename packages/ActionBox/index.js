import React, {PropTypes as pt} from 'react'
import {css} from 'glamor'
import {colors} from '../style/settings'
import {pxToEm, opacity} from '../style/utils'
import {Col, Row} from '../Layout'
import {CelebrateIcon, AlertIcon} from '../icons'
import {Action, P} from '../Text'

const iconConfig = {
  approve: ({compact}) =>
    <Col pr='-' y='end'>
      <CelebrateIcon size={compact ? 35 : 70} />
    </Col>,
  decline: ({compact}) =>
    <Col pl='-' y='end'>
      <AlertIcon size={compact ? 30 : 50} />
    </Col>
}

const style = css({
  display: 'inline-block',
  backgroundColor: opacity(colors.lightestTertiary, 0.06),
  borderRadius: pxToEm(5),
  transition: '.25s ease',
  textAlign: 'center',
  cursor: 'pointer'
})

const border = css({
  boxShadow: `inset 0 0 0 1px ${opacity(colors.darkestTertiary, 0.06)}`,
  ':hover': {
    boxShadow: `inset 0 0 0 2px ${colors.primary}`
  }
})

const sizing = {
  default: 185,
  compact: 102
}

const ActionBox = ({
  icon,
  Icon,
  action,
  explainer,
  passive,
  alert,
  onClick,
  compact
}) => {
  const I = Icon || iconConfig[icon]
  const size = sizing[compact ? 'compact' : 'default']

  return (
    <Col x {...{onClick}} p='-' width={size} height={size} {...style} {...border} role='button'>
      {I &&
        <Row mb='--' x>
          <I {...{compact}} />
        </Row>
      }
      <Action passive={passive} alert={alert}>{action}</Action>
      {!compact && <P compact>{explainer}</P>}
    </Col>
  )
}

ActionBox.propTypes = {
  icon: pt.oneOf(['approve', 'change', 'decline']),
  action: pt.string,
  explainer: pt.string,
  passive: pt.bool,
  alert: pt.bool,
  compact: pt.bool
}

export default ActionBox
