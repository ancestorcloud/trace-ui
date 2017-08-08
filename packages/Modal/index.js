import React, { PropTypes as pt } from 'react'
import ConfirmationModal from './Confirmation'
import ContentModal from './Content'
import { opacity } from '../style/utils'

const config = { content: ContentModal, confirmation: ConfirmationModal }

const Modal = ({ type = 'content', overlayBackground = 'light', ...rest }) => {
  const M = config[type]
  console.log(overlayBackground)
  return (
    <M
      {...{
        ...rest,
        overlayBackgroundColor: overlayBackground === 'dark'
          ? opacity('#3c5972', 0.75)
          : undefined
      }}
    />
  )
}

Modal.propTypes = {
  type: pt.oneOf([ 'content', 'confirmation' ]),
  overlayBackground: pt.oneOf([ 'light', 'dark' ])
}

export default Modal
