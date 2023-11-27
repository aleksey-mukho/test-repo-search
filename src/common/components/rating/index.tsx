import React, { SyntheticEvent, useCallback } from 'react';
import { Rating as RatingMUI } from '@mui/material';
import { isNumber } from 'lodash-es';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRating,
  ratingRepositorySelector,
  WithFavoriteRepositories,
} from '../../entities/favoriteRepositories';

type PropTypes = {
  itemId: string;
};
export const Rating = React.memo(({ itemId }: PropTypes) => {
  const dispatch = useDispatch();

  // In current implementation this is redundant, but if we imagine that we save rating in BE
  // we will store this data in Redux and send it with help Redux Saga
  const rating = useSelector((state: WithFavoriteRepositories) =>
    ratingRepositorySelector(state, itemId)
  );

  const onChange = useCallback(
    (event: SyntheticEvent, newValue: number | null) => {
      if (isNumber(newValue)) {
        dispatch(addRating({ itemId, rating: newValue }));
      }
    },
    []
  );

  return <RatingMUI value={rating} onChange={onChange} />;
});
