import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
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
  }
}));

const getQuery = (query, isbn) => {
  const str = "";

  query.split(" ").forEach(word => str+= `${word}+`);
  return `${str}&isbn=${isbn}`
}


export default function ReviewsModal({ book }) {
  const [openModal, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  // const queryString = getQuery(book.title._text, book.)

  return (
    <div >
      <p onClick={handleOpen} className={classes.reviews}> 
        Read reviews
      </p>
      <Modal
        aria-labelledby="reviews"
        aria-describedby="reviews-description"
        open={openModal}
        onClose={handleClose}
      >
       <div className={classes.goodreadsWidget} >
          <div>
            <h1 className={ classes.title }>
              Goodreads reviews for { book.title._text }
            </h1>
          </div>
          <div>
            {/* <iframe title={book.title._text} className={classes.iframe} src={`https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&header_text=Goodreads+reviews+for+${queryString}&links=660&review_back=fff&stars=000&text=000`} width='100%' height="420" frameBorder="0"></iframe> */}
          </div>
          <div className={ classes.grFooter }>
            <a className={ classes.gr_branding } target="_blank" rel="nofollow noopener noreferrer" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?utm_medium=api&utm_source=reviews_widget">Reviews from Goodreads.com</a>
          </div>
        </div>
      </Modal>
    </div>
  );
}