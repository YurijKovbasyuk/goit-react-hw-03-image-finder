import { Component } from 'react';
import css from './index.module.css';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModalWindow: false,
  };

  openModal = () => {
    this.setState({ showModalWindow: true });
    window.addEventListener('keydown', this.closeModal);
    window.addEventListener('mousedown', this.closeModal);
  };

  closeModal = e => {
    if (e.keyCode === 27 || e.target.nodeName !== 'IMG') {
      this.setState({ showModalWindow: false });
      window.removeEventListener('keydown', this.closeModal);
      window.removeEventListener('mousedown', this.closeModal);
    }
  };

  render() {
    const { showModalWindow } = this.state;
    const { largeImageURL, tags, webformatURL } = this.props;
    return (
      <li className={css.galleryItem}>
        <img
          onClick={this.openModal}
          className={css.galleryImage}
          src={webformatURL}
          alt={tags}
        />
        {showModalWindow && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
