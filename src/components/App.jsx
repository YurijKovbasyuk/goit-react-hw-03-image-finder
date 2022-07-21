import css from './index.module.css';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/index';
import Button from './Button';
import * as API from '../API/API';
// import Modal from './Modal';

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
  };

  // componentDidMount() {
  //   const { query, page, per_page } = this.state;
  //   this.getPhotos(query, page, per_page);
  // }

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
    console.log(this.state.page);
  };

  // openModal = e => {
  //   console.log(e);
  //   this.setState(prevState => ({ showModalWindow: !prevState }));
  // };
  openModal = () => {
    this.setState({ showModalWindow: true });
    window.addEventListener('keydown', this.closeModal);
    window.addEventListener('mousedown', this.closeModal);
  };

  closeModal = e => {
    console.log(e);
    console.log(this.props);
    console.log(this.props.showModalWindow);
    if (e.keyCode === 27 || e.target.nodeName === 'DIV') {
      this.setState({ showModalWindow: false });
      window.removeEventListener('keydown', this.closeModal);
      window.removeEventListener('mousedown', this.closeModal);
    }
  };

  render() {
    const { handleSubmitForm, handleLoadMore, openModal } = this;
    const { isVisible, images, error, isLoading, showModalWindow } = this.state;

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
          <ImageGallery
            images={images}
            openModal={openModal}
            showModalWindow={showModalWindow}
          />
        )}
        {isVisible && <Button onClick={handleLoadMore} isLoading={isLoading} />}
        {/* {showModalWindow && <Modal />} */}
      </div>
    );
  }
}

export default App;
