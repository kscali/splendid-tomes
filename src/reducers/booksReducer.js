import { SEARCH_BOOKS, SEARCH_AUTHOR } from "../actions/bookActions";

export const booksReducer = (state = {}, action) => {

  switch(action.type) {
    case SEARCH_BOOKS: 
    console.log("this is results from reducer", action.payload.GoodreadsResponse.search.results);
      return Object.assign({}, state, { search: action.payload.GoodreadsResponse.search.results });
    case SEARCH_AUTHOR:
      return Object.assign({}, state, { author: action.payload.GoodreadsResponse.author });
    default: 
      return state;
  };
};