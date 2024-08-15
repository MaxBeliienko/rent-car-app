import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
