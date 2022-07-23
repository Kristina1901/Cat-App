import { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('./HomePage'));
const Voting = lazy(() => import('./Voting'));
const Breeds = lazy(() => import('./Breeds'));
const BreedsDetails = lazy(() => import('./BreedsDetails'));
const Gallery = lazy(() => import('./Gallery'));
const Likes = lazy(() => import('./Likes'));
const Dislikes = lazy(() => import('./Dislikes'));
const Favourites = lazy(() => import('./Favourites'));
const Search = lazy(() => import('./Search'));
export const App = () => {
  const navigate = useNavigate();

  const [likes, setLikes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [query, setQuery] = useState('');
  const changeLikes = value => {
    setLikes(previtems => [...previtems, value].flat());
  };
  const changeFavourites = value => {
    setFavourites(previtems => [...previtems, value].flat());
  };
  const changeDislikes = value => {
    setDislikes(previtems => [...previtems, value].flat());
  };
  const getGalleryFavourites = value => {
    setFavourites(previtems => [...previtems, value].flat());
  };
  const changeQuery = item => {
    setQuery(item);
    navigate('/search');
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/voting"
            element={
              <Voting
                changeLikes={changeLikes}
                changeFavourites={changeFavourites}
                changeDislikes={changeDislikes}
                changeQuery={changeQuery}
              />
            }
          />
          <Route
            path="/breeds"
            element={<Breeds changeQuery={changeQuery} />}
          />
          <Route
            path="/breeds/breedsDetails/:id"
            element={<BreedsDetails changeQuery={changeQuery} />}
          />
          <Route
            path="/gallery"
            element={
              <Gallery
                getGalleryFavourites={getGalleryFavourites}
                changeQuery={changeQuery}
              />
            }
          />
          <Route
            path="/likes"
            element={<Likes likes={likes} changeQuery={changeQuery} />}
          />
          <Route
            path="/dislikes"
            element={<Dislikes dislikes={dislikes} changeQuery={changeQuery} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites favourites={favourites} changeQuery={changeQuery} />
            }
          />
          <Route path="/search" element={<Search query={query} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
