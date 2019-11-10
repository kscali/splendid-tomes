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
  },
  authCover: {
    width: '350px',
    margin: '0 auto'
  },
  authDetails: {
    display: 'flex',
    justifyContent: 'center'
  }
});
