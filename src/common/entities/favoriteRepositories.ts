import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NodeType } from '../types/repositories/types';
import { createSelector } from 'reselect';

export type FavoriteRepositoriesState = {
  repositories: NodeType[];
  ratings: {
    [key: string]: number;
  };
};
export type WithFavoriteRepositories = {
  favoriteRepositories: FavoriteRepositoriesState;
};

const initialState: FavoriteRepositoriesState = {
  repositories: [],
  ratings: {},
};

export const favoriteRepositoriesSlice = createSlice({
  name: 'favoriteRepositories',
  initialState,
  reducers: {
    addRepo: (state, action: PayloadAction<NodeType>) => {
      state.repositories.push(action.payload);
    },
    removeRepo: (state, action: PayloadAction<{ itemId: string }>) => {
      state.repositories = state.repositories.filter(
        (repo) => repo.id !== action.payload.itemId
      );
    },
    addRating: (
      state,
      action: PayloadAction<{ itemId: string; rating: number }>
    ) => {
      state.ratings[action.payload.itemId] = action.payload.rating;
    },
  },
});

export const { addRepo, removeRepo, addRating } =
  favoriteRepositoriesSlice.actions;

export const favoriteRepositories = favoriteRepositoriesSlice.reducer;

export const favoriteRepositoriesInitSelector = (
  state: WithFavoriteRepositories
) => state.favoriteRepositories;

export const favoriteRepositoriesSelector = createSelector(
  favoriteRepositoriesInitSelector,
  (favoriteRepositories: FavoriteRepositoriesState) => {
    return favoriteRepositories.repositories;
  }
);

export const ratingRepositorySelector = createSelector(
  [
    favoriteRepositoriesInitSelector,
    (_favoriteRepositories: WithFavoriteRepositories, repoId: string) => repoId,
  ],
  (favoriteRepositories: FavoriteRepositoriesState, repoId: string) => {
    return favoriteRepositories.ratings[repoId] || null;
  }
);
