import css from './index.module.css';
import PropTypes from 'prop-types';

function Modal(largeImageURL, tags, closeModal) {
  return (
    <div onClick={closeModal} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL.largeImageURL} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
