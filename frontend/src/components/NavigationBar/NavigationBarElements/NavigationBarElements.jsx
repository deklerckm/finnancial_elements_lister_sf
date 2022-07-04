import React from 'react';
// STYLE
import { makeStyles } from '@mui/styles';
// COMPONENTS
import NavigationBarElement from './NavigationBarElement/NavigationBarElement';

const NAVIGATION_BAR_ELEMENTS = [
  {
    id: 'elements',
    labelKey: 'elements',
    path: '/',
  },
  {
    id: 'createElement',
    labelKey: 'create',
    path: '/create',
  },
];

const NavigationBarElements = ({ toggleOpen }) => {
  const classes = useStyles();

  return NAVIGATION_BAR_ELEMENTS.map((element) => {
    const { id } = element;
    return (
      <li key={id} className={classes.element} onClick={toggleOpen}>
        <NavigationBarElement element={element} />
      </li>
    );
  });
};

const useStyles = makeStyles((theme) => ({
  element: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    listStyle: 'none',
    height: 60,
  },
}));

export default NavigationBarElements;
