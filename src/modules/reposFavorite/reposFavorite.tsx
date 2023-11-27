import { RepositoryTable } from '../../common';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { favoriteRepositoriesSelector } from '../../common/entities/favoriteRepositories';

export const ReposFavorite = React.memo(() => {
  const favoriteRepositories = useSelector(favoriteRepositoriesSelector);

  return (
    <div>
      <h1>Favorite</h1>
      {favoriteRepositories && favoriteRepositories.length ? (
        <RepositoryTable repositories={favoriteRepositories} isFavoritePage />
      ) : (
        <div>No Favorite Repositories</div>
      )}
    </div>
  );
});
