import React from 'react';
// STYLE
import { makeStyles } from '@mui/styles';
// ICONS
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material//Menu';
import CloseIcon from '@mui/icons-material/Close';
// COMPONENTS
import NavigationBarElements from './NavigationBarElements/NavigationBarElements';

/**
 * @param {Object} props
 * @param {boolean} props.open - Slider kinyitásához használt boolean
 * @param {Function} props.setOpen - Props.open boolean módosítására használt function
 */
const NavigationBar = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <IconButton className={classes.hamburger} onClick={toggleOpen}>
          <MenuIcon />
        </IconButton>
      </div>
      <nav
        className={
          open
            ? [classes.navElementsContainer, classes.open].join(' ')
            : classes.navElementsContainer
        }
      >
        <ul className={classes.navItems}>
          <li className={classes.navToggle}>
            <IconButton onClick={toggleOpen}>
              <CloseIcon />
            </IconButton>
          </li>
          <NavigationBarElements />
        </ul>
      </nav>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#4fc3f7',
    height: 80,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  hamburger: {
    background: 'none',
  },
  navElementsContainer: {
    backgroundColor: '#4fc3f7',
    height: '100vh',
    width: '250px',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: '-100%',
    transition: '850ms',
  },
  open: {
    left: 0,
    transition: '350ms',
  },
  navItems: {
    width: '100%',
    padding: 0,
  },
  navToggle: {
    backgroundColor: '#4fc3f7',
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
}));

export default NavigationBar;
