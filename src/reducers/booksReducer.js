import { SEARCH_BOOKS, SEARCH_AUTHOR, SAMPLE_BOOKS, GET_MAIN_BOOK } from "../actions/bookActions";

export const booksReducer = (state = {}, action) => {

  switch(action.type) {
    case GET_MAIN_BOOK: 
      return Object.assign({}, state, { mainBook: action.payload.GoodreadsResponse.book });
    case SEARCH_BOOKS: 
      return Object.assign({}, state, { search: action.payload.GoodreadsResponse.search.results.work });
    case SEARCH_AUTHOR:
      return Object.assign({}, state, { author: action.payload.GoodreadsResponse.author });
    case SAMPLE_BOOKS: 
      return Object.assign({}, state, { sample: action.payload.GoodreadsResponse.search.results.work });
    default: 
      return state;
  };
};