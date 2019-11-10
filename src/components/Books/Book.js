import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor, getBook } from '../../actions/bookActions';
import { getMainBook } from '../../reusable/selectors';
import { useStyles } from './Book.css.js';
import { Link } from 'react-router-dom';
import { Mui } from '../../reusable/MaterialUi';
import ReviewsModal from '../Modal/Modal';
import BookList from '../Books/BookList';
import Parser from 'html-react-parser';

const getAuthorInfo = auth => {
  if (Array.isArray(auth)) {
    return {
      id: auth[0].id._text,
      name: auth[0].name._text
    }
  } else {
    return {
      id: auth.id._text,
      name: auth.name._text
    }
  }
}

const Book = props  => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const bookId = props.match.params.id;
  const [heart, setHeart] = useState(false)
  const bookDetails = useSelector(getMainBook);
  const author = getAuthorInfo(bookDetails.authors.author);
 

  useEffect(() => {
    dispatch(getAuthor(author.id));
    dispatch(getBook(bookId));
  },[dispatch, author.id, bookId]);

  if (!bookDetails) return <div className={ classes.notFound } >No Book Details Found</div>;

  const favorite = heart ? <Mui.Favorite className={ classes.favoriteHeart } onClick={ () => setHeart(false) } /> : <Mui.FavoriteBorder className={ classes.favoriteHeart } onClick={() => setHeart(true)}/>;
  const title = bookDetails.title._text ? bookDetails.title._text : bookDetails.title._cdata;
  const similarBooks = !bookDetails.hasOwnProperty('similar_books') ? undefined : Array.isArray(bookDetails.similar_books.book) ? bookDetails.similar_books.book : [bookDetails.similar_books.book];
  const image = bookDetails.image_url._text ? bookDetails.image_url._text : bookDetails.image_url._data;
  const summary = bookDetails.description._cdata ? bookDetails.description._cdata : bookDetails.description._text;
  
  return (
    <div className={ classes.bg }>
      { bookDetails ? (
      <Mui.Card className={ classes.card }>
        <h1>
          { title.toUpperCase() }
        </h1>
        <Mui.CardContent className={ classes.bookDetails }>
          <div className={ classes.bookCover }>
            <img className={classes.bookPic} src={ image } alt="book-cover" />
          </div>
          <div className={ classes.bookInfo }>
            <h4 className={ classes.bookTitle }>
              <Link className={ classes.authorLink } to={`/author/${author.id}`}> 
                { author.name.toUpperCase() }
              </Link>
            </h4>
            { bookDetails.publication_year._text ? (
              <p className={ classes.bookTitle } >
                Release: { bookDetails.publication_year._text }
              </p> 
              ) : "" 
            }
            <div className={ classes.favorite }>
              <p>Add to library</p>
              { favorite }
            </div>
            <div className={ classes.ratings }>
              <Mui.Rating name="half-rating" value={ +bookDetails.average_rating._text } precision={ 0.5 } />
              <p className={ classes.vote_average }> 
                { bookDetails.average_rating._text }
              </p>
            </div>
            <ReviewsModal book={ bookDetails } />
          </div>
        </Mui.CardContent>
        <Mui.Typography variant="h6" className={ classes.summary } >
          { summary === undefined ? <div>No Summary</div> : Parser(summary) }
        </Mui.Typography>
      </Mui.Card>
        ) : ( 
          <div>No Book Details Found</div>
        )
      }
      { 
        similarBooks === undefined ? "" : 
       (
          <>
            <h3>Similar Books</h3>
            <BookList books={ similarBooks } />
          </>
        )
      }
    </div>
  )
}

export default Book;




