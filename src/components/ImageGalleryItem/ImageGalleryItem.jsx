import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  descr,
  largeImageURL,
  onClick,
}) => {
  const handleLargePic = () => {
    onClick(largeImageURL, descr);
  };

  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={descr} onClick={handleLargePic} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  descr: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
