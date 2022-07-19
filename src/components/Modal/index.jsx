import css from './index.module.css';

function Modal(largeImageURL, tags, closeModal) {
  return (
    <div onClick={closeModal} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL.largeImageURL} alt={tags} />
      </div>
    </div>
  );
}

export default Modal;
