import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: '25px'
  },
  title: {
    fontSize: 14,
  },
  bg: {
    background: 'lightgray'
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
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  bookCover: {
    width: '200px',
    marginRight: '20px'
  },
  bookDetails: {
    display: 'flex',
    justifyContent: 'center'
  },
  bookPic: {
    width: 120
  }
 });

 

