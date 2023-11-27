import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from '@mui/material';

import { NodeType } from '../../types/repositories/types';
import { TableRowSearch } from './tableRowSearch';
import { TableRowFavorite } from '../../../modules/reposFavorite/tableRowFavorite';
import { favoriteRepositoriesSelector } from '../../entities/favoriteRepositories';

type RepositoryTableType = {
  repositories: NodeType[];
  isFavoritePage?: boolean;
};

export const RepositoryTable: FC<RepositoryTableType> = React.memo(
  ({ repositories, isFavoritePage = false }) => {
    const favoriteRepositories = useSelector(favoriteRepositoriesSelector);

    return (
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Total Count Starts</TableCell>
            <TableCell align="center">Total Count Forks</TableCell>
            {isFavoritePage && <TableCell align="center">Rating</TableCell>}
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map((item: NodeType) =>
            isFavoritePage ? (
              <TableRowFavorite item={item} key={item.id} />
            ) : (
              <TableRowSearch
                item={item}
                key={item.id}
                isFavorite={favoriteRepositories.some(
                  (favoriteRepo) => favoriteRepo.id === item.id
                )}
              />
            )
          )}
        </TableBody>
      </Table>
    );
  }
);
