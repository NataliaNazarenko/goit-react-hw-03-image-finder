import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={largeImageURL} alt={tags} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
