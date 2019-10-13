import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksList, getAuthorBooks } from '../../reusable/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { getAuthor } from '../../actions/bookActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Favorite, FavoriteBorder} from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import './Book.css';

const Book = props  => {
  const bookId = props.match.params.id;
  const dispatch = useDispatch();

  const [heart, setHeart] = useState(false);

  const books = useSelector(getBooksList);
  const mainBook = books.forEach(book => console.log(book.best_book.id._text === bookId));
  console.log('this is main book', mainBook);
  console.log('this is main books', books);
  console.log('this is bookId', bookId);
  const authorId = mainBook.best_book.author.id._text;
  const authorBooks = useSelector(getAuthorBooks)
  const bookDetails = authorBooks.find(book => book.id._text === bookId);

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
    favorite: {
      display: 'flex',
      alignItems: 'center'
    }
  });

  const classes = useStyles();
  
  useEffect(() => {
    dispatch(getAuthor(authorId));
  },[dispatch, authorId]);

  if (!bookDetails) return null;

  const favorite = heart ? <Favorite className={classes.vote_average} onClick={() => setHeart(false)} /> : <FavoriteBorder className={classes.vote_average} onClick={() => setHeart(true)}/>;
  
  return (
    <div className={classes.bg}>
      <Card className={classes.card}>
        <h1>{bookDetails.title._text.toUpperCase()}</h1>
        <CardContent className="book-details">
          <div className="book-cover">
            <img src={bookDetails.image_url._text} alt="book-cover" />
          </div>
          <div className="book-info">
            <h4 className={ classes.bookTitle }>{bookDetails.authors.author.name._text.toUpperCase()}</h4>
            <p className={ classes.bookTitle } >Release: { bookDetails.publication_year._text }</p>
            <div className={classes.favorite}>
              <p>Add to library</p>
              {favorite}
            </div>
            <div className={classes.ratings}>
              <Rating name="half-rating" value={+bookDetails.average_rating._text} precision={0.5} />
              <p className={classes.vote_average}> {bookDetails.average_rating._text}</p>
            </div>
          </div>
        </CardContent>
        <Typography className={classes.summary} >{bookDetails.description._text}</Typography>
      </Card>
    </div>
  )
}

export default Book;




