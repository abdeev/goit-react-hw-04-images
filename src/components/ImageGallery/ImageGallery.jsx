import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map(pic => {
        return (
          <ImageGalleryItem
            key={pic.webformatURL}
            webformatURL={pic.webformatURL}
            descr={pic.tags}
            largeImageURL={pic.largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
};
