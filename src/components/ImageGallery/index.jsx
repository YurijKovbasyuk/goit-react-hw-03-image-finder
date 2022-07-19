import css from './index.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery(images, onClick) {
  return (
    <>
      <ul className={css.gallery}>
        {images.images.map(({ webformatURL, tags, id, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default ImageGallery;
