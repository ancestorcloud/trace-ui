import React, {PropTypes as pt} from 'react'
import ConfirmationModal from './Confirmation'
import ContentModal from './Content'

const config = {
  content: ContentModal,
  confirmation: ConfirmationModal
}

const Modal = ({type = 'content', ...rest}) => {
  const M = config[type]

  return <M {...rest} />
}

Modal.propTypes = {
  type: pt.oneOf(['content', 'confirmation'])
}

export default Modal
