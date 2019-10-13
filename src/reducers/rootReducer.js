import { combineReducers } from 'redux';
// import sessionReducer from './session_reducer';
import { booksReducer } from './booksReducer';
// import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  books: booksReducer,
  // session: sessionReducer,
  // errors: errorsReducer
})

export default rootReducer; 