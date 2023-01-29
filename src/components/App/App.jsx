import { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from '../API';
import ImageGallery from '../ImageGallery/ImageGallery';
import ButtonClick from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalUrl, setModalUrl] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handelFormSubmit = tagName => {
    setSearchQuery(tagName);
    setPage(1);
    setItems([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    } else {
      async function fetch() {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetchImage({
            page: page,
            searchQuery: searchQuery,
          });
          const items = response.hits;
          setItems(
            prevItems => [...prevItems, ...items],
            setShowButton(page < Math.ceil(response.totalHits / 12))
          );

          if (items.length === 0) {
            setError('Not found. Try another value');
          }
        } catch (error) {
          setError('Error. Please reload page');
        } finally {
          setIsLoading(false);
        }
      }
      fetch();
    }
  }, [page, searchQuery]);

  const toggleModal = largeImageUrl => {
    setShowModal(prev=>(!prev))
    // setShowModal(!showModal);
    setModalUrl(largeImageUrl);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handelFormSubmit} />
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      <ImageGallery items={items} onClick={toggleModal} />
      {showButton && <ButtonClick onClick={loadMore} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalUrl} alt={searchQuery} width="600" />
        </Modal>
      )}
    </AppContainer>
  );
};

export default App;
