import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className='books-list'>
      { books.map(book => <BookCard key={book.id._text} book={book} />) }
    </div>
  )
}

export default BookList
