import React from 'react';
import BookList from '../Books/BookList';
import Parser from 'html-react-parser';
import { Mui } from '../../reusable/MaterialUi';
import { useStyles } from './Author.css.js';
import { useSelector } from 'react-redux';
import { getAuthorBooks, getAuthorDetails } from '../../reusable/selectors';

export const Author = () => {

  const classes = useStyles();
  const author = useSelector(getAuthorDetails);
  const authorBooks = useSelector(getAuthorBooks);
 
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
        <Mui.CardContent className={classes.authDetails}>
          <div className={classes.authCover}>
            <img src={author.large_image_url._cdata} alt="author-cover" />
          </div>
        </Mui.CardContent>
        <Mui.Typography className={classes.summary} >
          { author.about.hasOwnProperty('_cdata') ? Parser(author.about._cdata) : "This author has no summary" }
        </Mui.Typography>
      </Mui.Card>
      <h3 className={ classes.authorInfo }>
        More From This Author
      </h3>
    <BookList books={ authorBooks } />
  </div>
  )
};