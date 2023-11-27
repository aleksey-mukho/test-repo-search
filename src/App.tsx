import { Routes, Route } from 'react-router-dom';

import { Layout } from './common';
import { ReposList } from './modules/reposList/reposList';
import { ReposFavorite } from './modules/reposFavorite/reposFavorite';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReposList />} />
          <Route path="favorite" element={<ReposFavorite />} />

          <Route path="*" element={<div>Nothing Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};
