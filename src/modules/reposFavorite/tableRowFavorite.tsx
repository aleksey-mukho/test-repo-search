import { Button, TableCell } from '@mui/material';
import React, { useCallback } from 'react';
import { TableRowUI } from '../../common/components/tableRow/tableRowUI';
import { NodeType } from '../../common/types/repositories/types';
import { Rating } from '../../common/components/rating';
import { removeRepo } from '../../common/entities/favoriteRepositories';
import { useDispatch } from 'react-redux';

type PropsType = {
  item: NodeType;
};
export const TableRowFavorite = React.memo(({ item }: PropsType) => {
  const dispatch = useDispatch();

  const removeFavorite = useCallback(
    (item: NodeType) => () => {
      dispatch(removeRepo({ itemId: item.id }));
    },
    [dispatch]
  );

  return (
    <TableRowUI item={item}>
      <>
        <TableCell align="center" width="18%">
          <Rating itemId={item.id} />
        </TableCell>
        <TableCell width="18%">
          <Button variant="text" onClick={removeFavorite(item)}>
            Remove Favorite
          </Button>
        </TableCell>
      </>
    </TableRowUI>
  );
});
