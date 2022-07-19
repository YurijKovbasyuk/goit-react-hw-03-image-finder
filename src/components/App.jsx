import css from './index.module.css';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/index';
import Button from './Button';
import * as API from './API/API';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    per_page: 12,
    isVisible: false,
    error: null,
    isLoading: false,
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

  render() {
    const { handleSubmitForm, handleLoadMore } = this;
    const { isVisible, images, error, isLoading } = this.state;
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
        <ImageGallery images={images} />
        {isVisible && <Button onClick={handleLoadMore} isLoading={isLoading} />}
      </div>
    );
  }
}

export default App;
