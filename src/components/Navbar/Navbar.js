import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mui } from '../../reusable/MaterialUi';
import { getBooks } from '../../actions/bookActions';
import { useStyles } from './Navbar.css.js';
import SideList from './SideList';
import { menuId, mobileMenuId, RenderMenu, RenderMobileMenu } from './Menu';

const Navbar = (props) => {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [state, setState] = useState({ left: false });
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
          <Mui.IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setState({left: true})}
          >
            <Mui.MenuIcon />
          </Mui.IconButton>
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
          <div className={classes.sectionDesktop}>
            <Mui.IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Mui.AccountCircle />
            </Mui.IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <Mui.IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Mui.MoreIcon />
            </Mui.IconButton>
          </div>
        </Mui.Toolbar>
      </Mui.AppBar>
      <Mui.SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <SideList side='left' toggleDrawer={toggleDrawer} />
      </Mui.SwipeableDrawer>
      <RenderMenu 
        anchorEl={anchorEl} 
        isMenuOpen={isMenuOpen} 
        handleMenuClose={handleMenuClose} 
      />
      <RenderMobileMenu 
        mobileMoreAnchorEl={ mobileMoreAnchorEl } 
        handleMobileMenuClose={ handleMobileMenuClose } 
        isMobileMenuOpen={ isMobileMenuOpen } 
        handleProfileMenuOpen={handleProfileMenuOpen} 
      />
    </div>
  );
}

export default withRouter(Navbar);