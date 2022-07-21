import css from './index.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery(images, openModal, showModalWindow) {
  // const { images, openModal, showModalWindow } = images;
  // console.log(images.openModal);
  // console.log(images.images);
  // console.log(images.showModalWindow);

  return (
    <>
      <ul className={css.gallery}>
        {images.images.map(({ webformatURL, tags, id, largeImageURL }) => {
          const { openModal, showModalWindow } = images;

          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              openModal={openModal}
              showModalWindow={showModalWindow}
            />
          );
        })}
      </ul>
    </>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  // onClick: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
