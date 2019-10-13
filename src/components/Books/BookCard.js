import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: '20px',
    "&:hover": {
      transform: 'scale(1.5, 1.5)',
      zIndex: 5,
      border: '1px solid #deded5'
      }
  },
  image: {
    paddingTop: '20px',
    objectFit: 'contain',
    height: '200px'
  },
  buttons: {
    justifyContent: 'center'
  }
});

const BookCard = (props) => {
  const classes = useStyles();
  const book = props.book;
  const goToBook = id => {
    props.history.push(`/${id}`)
  }
  
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => goToBook(book.best_book.id._text)}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={book.best_book.image_url._text}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {book.best_book.title._text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {book.best_book.author.name._text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button onClick={() => goToBook(book.best_book.id._text)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(BookCard);