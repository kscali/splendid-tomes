import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMainBook } from '../../reusable/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { getAuthor, getBook } from '../../actions/bookActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Favorite, FavoriteBorder} from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import Parser from 'html-react-parser';
import ReviewsModal from '../Modal/Modal';
import BookList from '../Books/BookList';
import './Book.css';

const Book = props  => {
  const bookId = props.match.params.id;
  const bookDetails = useSelector(getMainBook);
  const author = Array.isArray(bookDetails.authors.author) ? bookDetails.authors.author[0].name._text : bookDetails.authors.author.name._text ;
  const authorId = Array.isArray(bookDetails.authors.author) ? bookDetails.authors.author[0].id._text : bookDetails.authors.author.id._text ;
  const dispatch = useDispatch();

  const [heart, setHeart] = useState(false)

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
    favoriteHeart: {
      paddingLeft: '5px',
      cursor: 'pointer'
    },
    favorite: {
      display: 'flex',
      alignItems: 'center'
    },
    authorLink: {
      color: 'black',
      textDecoration: 'none'
    },
    notFound: {
      color: 'lightgray',
      display: 'flex',
      alignItems: 'center',
      fontSize: '40px',
      justifyContent: 'center',
      minHeight: '400px'
    }
  });

  const classes = useStyles();
  
  useEffect(() => {
    dispatch(getAuthor(authorId));
    dispatch(getBook(bookId));
  },[dispatch, authorId, bookId]);

  if (!bookDetails) return <div className={classes.notFound} >No Book Details Found</div>;

  const favorite = heart ? <Favorite className={classes.favoriteHeart} onClick={() => setHeart(false)} /> : <FavoriteBorder className={classes.favoriteHeart} onClick={() => setHeart(true)}/>;
  const title = bookDetails.title._text ? bookDetails.title._text : bookDetails.title._cdata;
  const similarBooks = Array.isArray(bookDetails.similar_books.book) ? bookDetails.similar_books.book : [bookDetails.similar_books.book];
  const image = bookDetails.image_url._text ? bookDetails.image_url._text : bookDetails.image_url._data;
  
  
  return (
    <div className={classes.bg}>
      { bookDetails ? (
      <Card className={classes.card}>
        <h1>
          {title.toUpperCase()}
        </h1>
        <CardContent className="book-details">
          <div className="book-cover">
            <img src={ image } alt="book-cover" />
          </div>
          <div className="book-info">
            <h4 className={ classes.bookTitle }>
              <Link className={classes.authorLink} to={`/author/${authorId}`}>
                {author.toUpperCase()}
              </Link>
            </h4>
            { bookDetails.publication_year._text ? (
              <p className={ classes.bookTitle } >
                Release: { bookDetails.publication_year._text }
              </p> 
              ) : "" 
            }
            <div className={classes.favorite}>
              <p>Add to library</p>
              {favorite}
            </div>
            <div className={classes.ratings}>
              <Rating name="half-rating" value={+bookDetails.average_rating._text} precision={0.5} />
              <p className={classes.vote_average}> 
                {bookDetails.average_rating._text}
              </p>
            </div>
            <ReviewsModal book={bookDetails} />
          </div>
        </CardContent>
        <Typography className={classes.summary} >
          { Parser(bookDetails.description._cdata) }
        </Typography>
      </Card>
        ) : ( <div>No Book Details Found</div>)
      }
      <h3>Similar Books</h3>
      <BookList books={ similarBooks } />
    </div>
  )
}

export default Book;




