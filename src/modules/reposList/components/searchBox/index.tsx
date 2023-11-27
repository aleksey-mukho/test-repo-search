import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import { DebouncedFunc } from 'lodash-es';
import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';

interface ISearchBlock {
  debouncer: DebouncedFunc<LazyQueryExecFunction<any, OperationVariables>>;
}

export const SearchBlock: FC<ISearchBlock> = React.memo(({ debouncer }) => {
  const [searchValue, setSearchValue] = useState('100');

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      debouncer({
        variables: { query: `language:react stars:>${e.target.value}` },
      });
    },
    [debouncer]
  );

  return (
    <TextField
      type="number"
      fullWidth
      label="Minimum number of stars"
      value={searchValue}
      onChange={onChangeHandler}
    />
  );
});
