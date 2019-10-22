import React from 'react';
import { useSelector } from 'react-redux';
import {  getAuthorBooks, getAuthorDetails } from '../../reusable/selectors';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BookList from '../Books/BookList';

export const Author = () => {

  const authorBooks = useSelector(getAuthorBooks);
  const author = useSelector(getAuthorDetails);

  const useStyles = makeStyles({
    card: {
      maxWidth: '800px',
      margin: '0 auto',
      paddingTop: '25px'
    },
    title: {
      fontSize: 14,
    },
    bg: {
      background: '#f7f7f0'
    },
    summary: {
      padding:'25px'
    },
    bookTitle: {
     marginTop: 0,
     marginBottom: '10px'
    },
    ratings: {
      display: 'flex',
      alignItems: 'center'

    },
    vote_average: {
      paddingLeft: '5px'
    },
    authorInfo: {
      display: 'flex',
      justifyContent: 'center'
    },
    authorLink: {
      color: 'black',
      textDecoration: 'none'
    }
  });

  const classes = useStyles();

  if (!author) return null;
  if (!authorBooks) return null;

  return (
    <div className={classes.bg}>
      <Card className={classes.card}>
        <h1>{author.name._text.toUpperCase()}</h1>
          <div className={ classes.authorInfo }>
            <h4 className={ classes.bookTitle }>
            Hometown: { author.hometown._text }
            </h4>
          </div>
        <CardContent className="book-details">
          <div className="book-cover">
            <img src={author.large_image_url._cdata} alt="book-cover" />
          </div>
        </CardContent>
        <Typography className={classes.summary} >{ author.about._cdata }</Typography>
      </Card>
      <h3 className={ classes.authorInfo }>More From This Author</h3>
    <BookList books={ authorBooks } />
  </div>
  )
};