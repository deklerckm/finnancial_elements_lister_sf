import React from 'react';
import { Link } from 'react-router-dom';
// STYLE
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';

const NavigationBarElement = ({ element }) => {
  const { labelKey, path } = element;
  const classes = useStyles();
  const { t } = useTranslationWithNamespaces();

  return (
    <Link to={path} className={classes.text}>
      <Typography>{t.common(labelKey)}</Typography>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    textDecoration: 'none',
    color: '#FFFFFF',
    width: '95%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    borderRadius: '4px',
    '&:hover': {
      background: '#1a83ff',
    },
  },
}));

export default NavigationBarElement;
