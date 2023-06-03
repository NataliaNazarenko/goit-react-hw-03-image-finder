import React from 'react';
import { Searchbar } from '../Searchbar/index.js';
import { ImageGallery } from '../ImageGallery/index.js';
import { Button } from '../Button/index.js';
import { LoaderComponent } from '../Loader/index.js';
import * as API from '../../api/index.js';
import { Message } from 'components/Message/index.js';

export class App extends React.Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  fetchImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(searchQuery, currentPage);

      if (data.hits.length === 0) {
        return this.setState({ error: 'Sorry image not found.' });
      }

      const normalizedImages = API.normalizedImages(data.hits);
      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <Message>{'Here begins the search for your pictures'}</Message>
        )}
        {isLoading && <LoaderComponent />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </>
    );
  }
}
