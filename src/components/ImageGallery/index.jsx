import css from './index.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery(images, onClick) {
  return (
    <>
      <ul className={css.gallery}>
        {images.images.map(({ webformatURL, tags, id, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
