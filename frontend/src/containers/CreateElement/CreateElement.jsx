import React, { useEffect, useState } from 'react';
import { resetElements } from 'features/element/elementSlice';
import axiosClient from 'api/client';
// STYLE
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import ElementForm from 'components/ElementForm/ElementForm';
import { validateElementInputs } from 'utils/validateElementInputs';

const CreateElement = () => {
  const { t } = useTranslationWithNamespaces();
  const dispatch = useDispatch();
  const { value: element } = useSelector((state) => state.element);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(resetElements());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreate = (e) => {
    e.preventDefault();

    if (!isSubmitted) {
      setIsSubmitted(true);
    }

    // VALIDATION
    if (!validateElementInputs(element)) {
      return null;
    }

    return axiosClient
      .post('/elements', element)
      .then((res) => {
        enqueueSnackbar(t.common('created_sucessfully'), {
          variant: 'success',
        });
        navigate('/');
      })
      .catch((err) => {
        // @TODO GLOBAL NETWORK ERRORKEZELÉS
      });
  };

  return (
    <form onSubmit={onCreate}>
      <Container sx={{ marginTop: '1rem' }}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography variant="h5">{t.common('create_new_element')}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider flexItem sx={{ margin: '1rem 0' }} />
          <Grid item>
            <ElementForm isSubmitted={isSubmitted} />
          </Grid>
          <Grid item>
            <Grid container justifyContent="flex-end" spacing={1}>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => navigate(-1)}
                  color="secondary"
                >
                  {t.common('back')}
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit">
                  {t.common('create')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default CreateElement;
