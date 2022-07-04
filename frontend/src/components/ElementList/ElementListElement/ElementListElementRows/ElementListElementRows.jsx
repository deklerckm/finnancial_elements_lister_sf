import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * @param {Object} props
 * @param {Object} props.element - Egy tranzakciót leíró objektum
 * @param {string} props.element._id - Azonosító
 * @param {string} props.element.summary - Leírás
 * @param {string} props.element.category - Kategória
 * @param {number} props.element.sum - Összeg
 * @param {string} props.element.currency - Valuta
 * @param {string} props.element.currency - Dátum
 */
const ElementListElementRows = ({ element }) => {
  const getValueAsPerType = (type, value) => {
    switch (type) {
      case 'date':
        return new Date(value).toLocaleString();
      default:
        return value;
    }
  };

  const ROWS = [
    {
      id: 'summary',
      typographyProps: {
        variant: 'h6',
      },
    },
    {
      id: 'paid',
      type: 'date',
      typographyProps: {
        variant: 'subtitle2',
        component: 'div',
      },
    },
  ];

  return (
    <Grid container direction="column">
      {ROWS.map((row) => {
        const { id, type, typographyProps } = row;

        const value = element[id];
        if (!value) return null;

        return (
          <Grid item key={id}>
            <Typography {...typographyProps}>{getValueAsPerType(type, value)}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ElementListElementRows;
