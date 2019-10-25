import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mui } from '../../reusable/MaterialUi';
import Share from './Share';
import { useStyles } from './BookCard.css.js';

const BookCard = (props) => {
  const classes = useStyles();
  const book = props.book;

  const bookId = book.best_book ? book.best_book.id._text : book.id._text;
  
  const bookImg = book.best_book ? book.best_book.image_url._text : book.image_url._text ? book.image_url._text : book.image_url._cdata;
  const bookTitle = book.best_book ? book.best_book.title._text : book.title._text ? book.title._text : book.title._cdata;
  const author = book.best_book ? book.best_book.author.name._text : book.authors.author.name._text;
  
  const goToBook = id => {
    props.history.push(`/${id}`);
    window.scrollTo(0, 0);
  }
  
  return (
    <Mui.Card className={classes.card}>
      <Mui.CardActionArea onClick={() => goToBook(bookId)}>
        <Mui.CardMedia
          className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={ bookImg }
          title="Contemplative Reptile"
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h5" component="h2">
           { bookTitle }
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
            { author }
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
      <Mui.CardActions className={classes.buttons}>
        <Share />
        <Mui.Button onClick={() => goToBook(bookId)} size="small" color="primary">
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
  );
}

export default withRouter(BookCard);