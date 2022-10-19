import { useState, useEffect, useCallback } from 'react';

import { ButtonLoadMore } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { SearchBar } from '../Searchbar/Searchbar';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import PixabayApi from '../../api/PixabayApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
  const [pictures, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [descr, setDescr] = useState('');

  const onChangeQuery = query => {
    setImages([]);
    setCurrentPage(1);
    setSearchQuery(query);
    setError(null);
  };

  const picsFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await PixabayApi({
        page: currentPage,
        searchQuery: searchQuery,
      });

      setImages(prev => [...prev, ...response]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, currentPage]);

  const toggleModal = (largeUrl, descr) => {
    setShowModal(!showModal);
    setModalUrl(largeUrl);
    setDescr(descr);
  };

  const handleClickMoreBtn = () => {
    setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    if (searchQuery) {
      picsFetch();
    }
  }, [searchQuery, currentPage, picsFetch]);

  useEffect(() => {
    if (error) {
      console.log('Warning');
    }
  }, [error]);

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onChangeQuery} />
      <div>
        <ImageGallery pictures={pictures} onClick={toggleModal} />
      </div>
      <span className={css.Button_wrapper}>
        {pictures.length % 12 < 1 && pictures.length > 0 && (
          <ButtonLoadMore onClick={handleClickMoreBtn} />
        )}
        <Loader loading={isLoading} />
      </span>
      {showModal && (
        <Modal url={modalUrl} descr={descr} toggleModal={toggleModal} />
      )}
      <ToastContainer />
    </div>
  );
};
