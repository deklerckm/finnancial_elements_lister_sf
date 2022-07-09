import React, { useEffect } from 'react';
import axiosClient from 'api/client';
import { loadElement, toggleLoading, resetElement } from 'features/element/elementSlice';
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
// COMPONENTS
import ElementForm from 'components/ElementForm/ElementForm';

const ViewAndUpdateElementContainer = ({ id }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.element);

  useEffect(() => {
    dispatch(toggleLoading(true));
    axiosClient
      .get(`/elements/${id}`)
      .then((res) => {
        dispatch(loadElement(res.data));
      })
      .catch((err) => {
        // @TODO
        dispatch(toggleLoading(false));
      });

    return () => {
      dispatch(resetElement());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>@TODO SKELETON LOADING SCREEN</div>;
  }

  return <ElementForm readOnly={true} />;
};

export default ViewAndUpdateElementContainer;
