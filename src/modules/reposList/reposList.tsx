import React, { useEffect, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';
import { debounce } from 'lodash-es';

import { Loader, RepositoryTable } from '../../common';

import { GET_REPOSITORIES } from './queries';
import { SearchBlock } from './components/searchBox';

export const ReposList = React.memo(() => {
  const [search, { loading, data, error }] = useLazyQuery(GET_REPOSITORIES);

  const debouncer = useMemo(() => {
    return debounce(search, 1000);
  }, [search]);

  useEffect(() => {
    search({
      variables: { query: 'language:react stars:>100' },
    }).catch(console.warn);
  }, [search]);

  return (
    <div>
      <h1>List of Repositories</h1>
      <SearchBlock debouncer={debouncer} />

      {loading && !error && <Loader />}

      {!!data?.search?.nodes?.length && !loading && (
        <RepositoryTable repositories={data?.search?.nodes || []} />
      )}

      {!data?.search?.nodes?.length && !loading && <h3>"Nothing to show"</h3>}
    </div>
  );
});
