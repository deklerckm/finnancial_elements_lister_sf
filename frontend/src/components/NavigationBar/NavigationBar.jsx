import React from 'react';
// STYLE
import { makeStyles } from '@mui/styles';
// COMPONENTS
import NavigationBarElements from './NavigationBarElements/NavigationBarElements';
import AppBar from './AppBar/AppBar';

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
      <AppBar toggleOpen={toggleOpen} />
      <nav
        className={
          open
            ? [classes.navElementsContainer, classes.open].join(' ')
            : classes.navElementsContainer
        }
      >
        <ul className={classes.navItems}>
          <NavigationBarElements toggleOpen={toggleOpen} />
        </ul>
      </nav>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  navElementsContainer: {
    backgroundColor: '#1976d2',
    height: '100vh',
    width: '250px',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: '-100%',
    transition: '850ms',
    zIndex: 100,
  },
  open: {
    right: 0,
    transition: '350ms',
  },
  navItems: {
    width: '100%',
    padding: 0,
    paddingTop: 64,
  },
}));

export default NavigationBar;
