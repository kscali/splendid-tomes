import React from 'react';
import { useSelector } from 'react-redux';
import {  getAuthorBooks, getAuthorDetails } from '../../reusable/selectors';
import { useStyles } from './Author.css.js';
import { Mui } from '../../reusable/MaterialUi';
import BookList from '../Books/BookList';
import Parser from 'html-react-parser';

export const Author = () => {

  const authorBooks = useSelector(getAuthorBooks);
  const author = useSelector(getAuthorDetails);
  const classes = useStyles();

  if (!author) return null;
  if (!authorBooks) return null;

  return (
    <div className={classes.bg}>
      <Mui.Card className={classes.card}>
        <h1>{author.name._text.toUpperCase()}</h1>
          <div className={ classes.authorInfo }>
            { author.hometown._text ? (
              <h4 className={ classes.bookTitle }>
                Hometown: { author.hometown._text }
              </h4>
              ) : " "
            }
          </div>
        <Mui.CardContent className="book-details">
          <div className="book-cover">
            <img src={author.large_image_url._cdata} alt="book-cover" />
          </div>
        </Mui.CardContent>
        <Mui.Typography className={classes.summary} >
          { Parser(author.about._cdata) }
        </Mui.Typography>
      </Mui.Card>
      <h3 className={ classes.authorInfo }>
        More From This Author
      </h3>
    <BookList books={ authorBooks } />
  </div>
  )
};