import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
// ICONS
import CategoryIcon from 'components/CategoryIcon/CategoryIcon';
// UTILS
import { getParsedSum } from 'utils/getParsedSum';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// CONTANTS
import { CATEGORIES } from 'constants/categories';
// COMPONENTS
import ElementListElementRows from './ElementListElementRows/ElementListElementRows';
import ElementListElementOperationButtons from './ElementListElementOperationButtons/ElementListElementOperationButtons';

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
const ElementListElement = ({ element, queryElements }) => {
  const { _id: id, summary, category, sum, currency } = element;
  const { t } = useTranslationWithNamespaces();
  const classes = useStyles();

  const categoryObject = CATEGORIES.find((cat) => cat.id === category);

  return (
    <Card elevation={3}>
      <Grid container wrap="nowrap" spacing={1}>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ width: '1.5rem', backgroundColor: categoryObject?.color ?? 'Grey' }}
        />
        <Grid item xs={11.7}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md="auto">
                  <CategoryIcon categoryObject={categoryObject} />
                </Grid>
                <Grid item>
                  <ElementListElementRows element={element} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1} justifyContent="flex-end">
                <Grid item>
                  <Typography variant="h5">{getParsedSum(currency, sum, t)}</Typography>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.rightDivider}
                  sx={{ marginLeft: '.5rem' }}
                />
                <Grid item>
                  <ElementListElementOperationButtons
                    id={id}
                    summary={summary}
                    queryElements={queryElements}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  rightDivider: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default ElementListElement;
