import css from './index.module.css';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/index';
import Button from './Button';
import * as API from '../API/API';
import Modal from './Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    per_page: 12,
    isVisible: false,
    error: null,
    isLoading: false,
    showModalWindow: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, per_page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page, per_page);
    }
  }

  getPhotos = async (query, page, per_page) => {
    if (!query) return;
    this.setState({ isLoading: true });

    try {
      const data = await API.getImages(query, page, per_page);

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isVisible: page < Math.ceil(data.totalHits / per_page),
      }));
    } catch (error) {
      this.setState({ error: error.response.data });
      console.log('error', error.response.data);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmitForm = value => {
    this.setState({
      query: value.trim(),
      page: 1,
      isVisible: false,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({
      showModalWindow: true,
      largeImage: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModalWindow: false,
      largeImage: '',
    });
  };

  render() {
    const { handleSubmitForm, handleLoadMore } = this;

    const { isVisible, images, error, isLoading, showModalWindow, largeImage } =
      this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={handleSubmitForm} />
        {images.length === 0 && !error && <p>Sorry. There are not images 😢</p>}

        {error && (
          <p>
            Something wrong: {error} <br />
            <span className={css.cotact}>Contact your administrator</span>
          </p>
        )}

        {images.length !== 0 && (
          <ImageGallery images={images} onImgClick={this.openModal} />
        )}

        {isVisible && <Button onClick={handleLoadMore} isLoading={isLoading} />}

        {showModalWindow && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
