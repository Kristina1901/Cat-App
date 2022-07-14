import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage'));
const Voting = lazy(() => import('./Voting'));
const Breeds = lazy(() => import('./Breeds'));
const BreedsDetails = lazy(() => import('./BreedsDetails'));
const Gallery = lazy(() => import('./Gallery'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Download...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/breeds/breedsDetails/:id" element={<BreedsDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
