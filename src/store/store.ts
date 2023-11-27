import { configureStore } from '@reduxjs/toolkit';
import { favoriteRepositories } from '../common/entities/favoriteRepositories';

export const store = configureStore({
  reducer: { favoriteRepositories },
});
