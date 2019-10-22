import React from 'react';
import { useSelector } from 'react-redux';
import { getBooksList } from '../../reusable/selectors';
import BookList from './BookList';

const SearchResults = () => {
  const books = useSelector(getBooksList);
 
  if (!books) return null;
  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default SearchResults;
