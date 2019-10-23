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
  },
  noReviews: {
    padding: '15px'
  }
}));

const getQuery = (query, isbn) => {
  let index = query.indexOf("(");

  let str = "";

  if (index) {
    query = query.slice(0, index - 1)
  }

  query = query.split(" ");
  
  for (let i = 0; i < query.length; i++) {
    str += `${query[i]}+`
  }

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
  const title = book.title._text ? book.title._text : book.title._cdata;
  const isbn = book.isbn._cdata ? book.isbn._cdata : book.isbn._text;
  const queryString = getQuery(title, isbn);

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
              Goodreads reviews for { title }
            </h1>
          </div>
          <div>
            { isbn !== undefined ? (
            <iframe 
              title={title} 
              className={classes.iframe} 
              src={`https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&header_text=Goodreads+reviews+for+${queryString}&links=660&review_back=fff&stars=000&text=000`} 
              width='100%' height="420" frameBorder="0">
            </iframe>) 
            : (<div className={ classes.noReviews } >Please read reviews for <a href={`https://www.goodreads.com/book/show/${book.id._text}.${book.title._text}?utm_medium=api&utm_source=reviews_widge`}>{`${title}`}</a> on GoodReads</div>)}
            </div>
          <div className={ classes.grFooter }>
            <a className={ classes.gr_branding } target="_blank" rel="nofollow noopener noreferrer" href={`https://www.goodreads.com/book/show/${book.id._text}.${book.title._text}?utm_medium=api&utm_source=reviews_widge`}>Reviews from Goodreads.com</a>
          </div>
        </div>
      </Modal>
    </div>
  );
}