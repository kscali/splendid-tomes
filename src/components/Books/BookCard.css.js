import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    width: 345,
    margin: '20px',
    "&:hover": {
      transform: 'scale(1.25, 1.25)',
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