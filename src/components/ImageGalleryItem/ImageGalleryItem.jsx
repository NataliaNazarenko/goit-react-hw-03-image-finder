import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/index.js';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    return (
      <>
        <GalleryItem>
          <GalleryImage
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal}
          ></GalleryImage>
          {showModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={this.toggleModal}
            />
          )}
        </GalleryItem>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
