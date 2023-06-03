import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/index.js';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
