import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./HomePage' /* webpackChunkName: "home-page" */)
);
const Voting = lazy(() => import('./Voting' /* webpackChunkName: "cast" */));
const Breeds = lazy(() => import('./Breeds' /* webpackChunkName: "cast" */));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Download...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
