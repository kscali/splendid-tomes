export const getBooksList = state => state.books? state.books.search.work :  null;
export const getAuthorBooks = state => state.books.author.books.book;