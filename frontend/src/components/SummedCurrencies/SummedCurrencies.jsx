import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// REDUX
import { useSelector } from 'react-redux';

const SummedCurrencies = () => {
  const { value: elements } = useSelector((state) => state.elements);

  const valuesPerCurrency = elements.reduce((acc, currentElement) => {
    const { currency, sum } = currentElement;

    if (!acc.find(({ id }) => id === currency)) {
      return [
        ...acc,
        {
          id: currency,
          sum,
        },
      ];
    }

    return acc.map((accCurrentElement) => {
      if (accCurrentElement.id !== currency) {
        return accCurrentElement;
      }

      return {
        ...accCurrentElement,
        sum: accCurrentElement.sum + sum,
      };
    });
  }, []);

  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Grid container direction="column">
          {valuesPerCurrency.map((currencyValue) => {
            const { id, sum } = currencyValue;
            return (
              <Grid item key={id}>
                <Typography>{`${sum} ${id}`}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SummedCurrencies;
