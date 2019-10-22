import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import * as booksImg from '../../images/books2.jpg';
import { getSampleBookList } from '../../reusable/selectors';
import { getSampleBooks } from '../../actions/bookActions';
import './Home.css';
import BookList from '../Books/BookList';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSampleBooks("Love"));
  }, [dispatch]);

  const books = useSelector(getSampleBookList);

  if (!books) return null;
  return (
    <div>
      <div>
        <img src={booksImg} alt="books"/>
      </div>
      <h2>Recommendations</h2>
      { books && books.length ? (
        <BookList books={books} />
      ) : (
      <div>Loading...</div>
      )
    }
  </div>
  )
};

export default Home;
