export const getBooksList = state => state.books? state.books.search : null;
export const getAuthorBooks = state => state.books.author.books.book;
export const getSampleBookList = state => state.books? state.books.sample : null;
export const getAuthorDetails = state => state.books.author;
export const getMainBook = state =>  state.books.mainBook;

