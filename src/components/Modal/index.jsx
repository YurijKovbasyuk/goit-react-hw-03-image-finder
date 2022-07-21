import css from './index.module.css';
import { Component } from 'react';
// import PropTypes from 'prop-types';

class Modal extends Component {
  // state = {
  //   showModalWindow: false,
  // };
  // (largeImageURL, tags, closeModal)
  // openModal = () => {
  //   this.setState({ showModalWindow: true });
  //   window.addEventListener('keydown', this.closeModal);
  //   window.addEventListener('mousedown', this.closeModal);
  // };

  // closeModal = e => {
  //   console.log(e);
  //   console.log(this.props);
  //   console.log(this.props.showModalWindow);
  //   if (e.keyCode === 27 || e.target.nodeName === 'DIV') {
  //     this.props.showModalWindow(this.setState({ showModalWindow: false }));
  //     window.removeEventListener('keydown', this.closeModal);
  //     window.removeEventListener('mousedown', this.closeModal);
  //   }
  // };
  render() {
    const { largeImageURL, tags } = this.props;
    console.log(largeImageURL);
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };

export default Modal;
