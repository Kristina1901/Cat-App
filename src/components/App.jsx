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
  const [value, setValue] = useState('');
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
  const changeValue = item => {
    setValue(item);
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
                changeValue={changeValue}
              />
            }
          />
          <Route
            path="/breeds"
            element={<Breeds changeValue={changeValue} />}
          />
          <Route
            path="/breeds/breedsDetails/:id"
            element={<BreedsDetails changeValue={changeValue} />}
          />
          <Route
            path="/gallery"
            element={
              <Gallery
                getGalleryFavourites={getGalleryFavourites}
                changeValue={changeValue}
              />
            }
          />
          <Route path="/likes" element={<Likes likes={likes} />} />
          <Route path="/dislikes" element={<Dislikes dislikes={dislikes} />} />
          <Route
            path="/favourites"
            element={<Favourites favourites={favourites} />}
          />
          <Route path="/search" element={<Search value={value} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
