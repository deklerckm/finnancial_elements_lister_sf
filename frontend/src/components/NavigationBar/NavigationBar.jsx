import React from 'react';
import Coin from 'assets/images/coin.png';
// STYLE
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
// ICONS
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material//Menu';
import CloseIcon from '@mui/icons-material/Close';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
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
  const { t } = useTranslationWithNamespaces();

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <Grid
          container
          spacing={1}
          sx={{ padding: '.5rem', margin: '0 .5rem' }}
          alignItems="flex-end"
        >
          <Grid item>
            <img src={Coin} style={{ width: 40, height: 40 }} alt="coin" />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                item
                sx={{
                  fontFamily: 'Rambla, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                }}
              >
                sprintform
              </Grid>
              <Grid item>{t.common('spending_tracker_tool')}</Grid>
            </Grid>
          </Grid>
        </Grid>
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
          <NavigationBarElements toggleOpen={toggleOpen} />
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
    justifyContent: 'space-between',
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
  },
  navToggle: {
    backgroundColor: '#4fc3f7',
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
}));

export default NavigationBar;
