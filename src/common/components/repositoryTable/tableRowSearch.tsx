import { Button, TableCell } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { NodeType } from '../../types/repositories/types';
import { TableRowUI } from '../tableRow/tableRowUI';
import { useDispatch } from 'react-redux';
import { addRepo, removeRepo } from '../../entities/favoriteRepositories';

type PropsType = {
  item: NodeType;
  isFavorite: boolean;
};
export const TableRowSearch = React.memo(({ item, isFavorite }: PropsType) => {
  const dispatch = useDispatch();

  const setFavorite = useCallback(
    (item: NodeType) => () => {
      dispatch(addRepo(item));
    },
    [dispatch]
  );

  const removeFavorite = useCallback(
    (item: NodeType) => () => {
      dispatch(removeRepo({ itemId: item.id }));
    },
    [dispatch]
  );

  return (
    <TableRowUI item={item}>
      <TableCell align="center" width="18%">
        {isFavorite ? (
          <Button variant="text" onClick={removeFavorite(item)}>
            Remove Favorite
          </Button>
        ) : (
          <Button variant="text" onClick={setFavorite(item)}>
            Set Favorite
          </Button>
        )}
      </TableCell>
    </TableRowUI>
  );
});
