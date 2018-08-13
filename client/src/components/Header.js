import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flexGrow: 1,
  },
  questionButton: {
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit">
              <Link to="/" className={classes.link}>Quiz Master</Link>
            </Typography>
            <Typography variant="subheading" color="inherit">
              <Link to="/questions/new" className={classes.link}>Add Question</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);