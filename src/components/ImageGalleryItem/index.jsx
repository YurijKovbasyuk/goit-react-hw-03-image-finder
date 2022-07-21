import css from './index.module.css';
import Modal from 'components/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  largeImageURL,
  tags,
  webformatURL,
  openModal,
  showModalWindow,
}) => {
  console.log(largeImageURL);
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryImage}
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />

      {showModalWindow && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          showModalWindow={showModalWindow}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
