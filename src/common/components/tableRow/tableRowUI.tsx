import { Stack, TableCell, TableRow, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ForkRight from '@mui/icons-material/ForkRight';
import React from 'react';
import { NodeType } from '../../types/repositories/types';

type PropsType = {
  item: NodeType;
  children: React.ReactNode;
};

export const TableRowUI = ({ item, children }: PropsType) => {
  return (
    <TableRow key={item.id}>
      <TableCell align="left">
        <Typography variant="subtitle1">{item.name}</Typography>
      </TableCell>
      <TableCell width="15%" align="center">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}>
          <StarIcon color="primary" />
          <Typography variant="body1">{item.stargazers.totalCount}</Typography>
        </Stack>
      </TableCell>
      <TableCell width="15%" align="center">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}>
          <ForkRight color="primary" />
          <Typography variant="body1">{item.forks.totalCount}</Typography>
        </Stack>
      </TableCell>
      {children}
    </TableRow>
  );
};
