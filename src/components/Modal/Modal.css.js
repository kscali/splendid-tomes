import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  reviews: {
    color: 'gray',
    marginTop: 0,
    cursor: 'pointer'
  },
  goodreadsWidget : {
    fontFamily: 'georgia, serif',
    padding: '18px 15px',
    minWidth: '300px',
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontWeight: 'normal',
    fontSize: '16px',
    borderBottom: '1px solid #BBB596',
    marginBottom: '0'
  },
  grFooter: {
    width: '100%',
    borderTop: '1px solid #BBB596',
    textAlign: 'right'
  },
  grBranding: {
    color: '#382110',
    fontSize: '11px',
    textDecoration: 'none',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  noReviews: {
    padding: '15px'
  }
}));