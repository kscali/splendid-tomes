import React from 'react';
import { useStyles } from './Navbar.css.js';
import { Home, LocalLibrary, MenuBook, Favorite } from '@material-ui/icons';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';

const SideList = ({ side, toggleDrawer }) => {
  
  const classes = useStyles();
  const icons = [
    <Home />, 
    <LocalLibrary />,
    <MenuBook/>,
    <Favorite />]
 
 return (<div
    className={classes.list}
    role="presentation"
    onClick={toggleDrawer(side, false)}
    onKeyDown={toggleDrawer(side, false)}
  >
    <List>
      {['Home', 'My Books', 'Recommendations', 'Favorites'].map((text, i) => (
        <ListItem button key={text}>
          <ListItemIcon className={ classes.icons }>{ icons[i] }</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
        <ListItem button>
          <ListItemIcon className={ classes.icons }><AccountCircle /></ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
    </List>
  </div>);
};

export default SideList
