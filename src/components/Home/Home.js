import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import * as booksImg from '../../images/books2.jpg';
import { getBooksList } from '../../reusable/selectors';
// import Slider from "react-slick";
import BookCard from '../Books/BookCard';
import { getBooks } from '../../actions/bookActions';
import './Home.css';

const Home = () => {

  // const settings = {
  //   className: "carousel-books",
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks("Love"));
  }, [dispatch]);

  const books = useSelector(getBooksList);
  if (!books) return null;
  return (
    <div>
      <div>
        <img src={booksImg} alt="books"/>
      </div>
      <h2>Recommendations</h2>
      { books && books.length ? (
        // <Slider {...settings}>
        //   { books.map(book => <BookCard key={book.id._text} book={book} />) }
        // </Slider>
        <div className='books-list'>
        { books.map(book => <BookCard key={book.id._text} book={book} />) }
        </div>
      ) : (
      <div>Loading...</div>
      )
    }
  </div>
  )
};

export default Home;
