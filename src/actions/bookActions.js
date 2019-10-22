import axios from 'axios';
const convert = require('xml-js');

const apiKey = `${process.env.API_KEY}`;
const config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SEARCH_AUTHOR = "SEARCH_AUTHOR";
export const SAMPLE_BOOKS = "SAMPLE_BOOKS";

export const searchBooks = books => ({
  type: SEARCH_BOOKS,
  payload: books
});

export const searchAuthor = author => ({
  type: SEARCH_AUTHOR,
  payload: author
});

export const sampleBooks = books => ({
  type: SAMPLE_BOOKS,
  payload: books
})


export const getBooks = (query, page=1) => dispatch => {
  
  const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=${apiKey}&q=${query}&page=${page}${config}`
  console.log("this is query", query);
  axios.get(url).then(res => {
    dispatch(searchBooks(JSON.parse(convert.xml2json(res.data, {compact: true, spaces: 2}))))
  });
};

export const getSampleBooks = (query, page=1) => dispatch => {
  
  const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=${apiKey}&q=${query}&page=${page}${config}`

  axios.get(url).then(res => {
    dispatch(sampleBooks(JSON.parse(convert.xml2json(res.data, {compact: true, spaces: 2}))))
  });
};

export const getAuthor = id => dispatch => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show/${id}?format=xml&key=${apiKey}`;
 
  axios.get(url).then(res => dispatch(searchAuthor(JSON.parse(convert.xml2json(res.data, {compact: true, spaces: 2})))));
}

