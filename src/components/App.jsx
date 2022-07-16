import css from './index.module.css';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

class App extends Component {
  componentDidMount() {
    fetch`https://pixabay.com/api/?q=cat&page=1&key=27625632-25685d1490259d6854a924975&image_type=photo&orientation=horizontal&per_page=12`
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // return Promise.reject{
        //   new Error{'ошибка' }
        // };
      })
      .then(data => console.log(data));
  }
  render() {
    return (
      <div className={css.app}>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <ImageGalleryItem></ImageGalleryItem>
        <Loader></Loader>
        <Button></Button>
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
