import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mui } from '../../reusable/MaterialUi';
import { getBooks } from '../../actions/bookActions';
import { useStyles } from './Navbar.css.js';

const Navbar = (props) => {
  
  const classes = useStyles();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const searchForBook = query => {
    dispatch(getBooks(query));
  };

  const onEnter = (e) => {
    if (e.key === 'Enter' && e.target.value !== "") {
      searchForBook(input);
      setInput("");
      props.history.push('/results');
    };
  };

  return (
    <div className={classes.grow}>
      <Mui.AppBar className={classes.bar} position="static">
        <Mui.Toolbar>
          <Mui.Typography className={classes.title} variant="h6" noWrap>
            <Link to='/'>
              <span className={ classes.splendid }>
                splendid
              </span>
              <span className={classes.tomes} >
                tomes
              </span>
            </Link>
          </Mui.Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Mui.SearchIcon />
            </div>
            <Mui.InputBase
              value={input}
              onKeyDown={onEnter}
              onChange={handleChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
        </Mui.Toolbar>
      </Mui.AppBar>
    </div>
  );
}

export default withRouter(Navbar);