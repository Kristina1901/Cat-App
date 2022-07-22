import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import s from './BreedsDetails.module.css';
import Logo from 'components/Logo/Logo';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import Form from 'components/Form/Form';
import styles from '../Logo/Logo.module.css';
import Loader from 'components/Loader/Loader';
import { getCatsBreedsImage } from '../../services/cats-api';
const BreedsDetails = ({ changeValue }) => {
  const [breed, setBreed] = useState([]);
  const [page, setPage] = useState(0);
  const [img, setImg] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [pending, setPending] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (id !== '' && page === 0) {
      setPending(true);
      getCatsBreedsImage(id, 0)
        .then(data => {
          setImg(data[0].url);
          setBreed(data[0].breeds);
          setPending(false);
        })
        .catch(console.log);
    }
    if (page !== 0) {
      setPending(true);
      getCatsBreedsImage(id, page)
        .then(data => {
          setImg(data[0].url);
          setBreed(data[0].breeds);
          setPending(false);
        })
        .catch(console.log);
    }
  }, [id, page]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.wrapper}>
        <header>
          <div className={styles.headerMain}>
            <Logo />
            <ul className={styles.list}>
              <li key={nanoid()} className={styles.item}>
                <div className={styles.imgVoiting}>
                  <img src={vote} alt="vote-table" width="100px" />
                </div>
                <Link
                  to={'../voting'}
                  state={{ from: location }}
                  className={styles.link}
                >
                  Voting
                </Link>
              </li>
              <li key={nanoid()} className={styles.item}>
                <div className={styles.imgBreeds}>
                  <img src={breeds} alt="breeds" width="117px" />
                </div>
                <Link
                  to={'/breeds'}
                  state={{ from: location }}
                  className={styles.link}
                >
                  Breeds
                </Link>
              </li>
              <li key={nanoid()} className={styles.item}>
                <div className={styles.imgGallery}>
                  <img src={gallery} alt="gallery" width="112px" />
                </div>
                <Link
                  to={'../gallery'}
                  state={{ from: location }}
                  className={styles.link}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className={s.commonMark}>
          <div className={s.wrapperForm}>
            <Form changeValue={changeValue} />
            <div className={s.thumbLinks}>
              <Link
                to={'../likes'}
                state={{ from: location }}
                className={s.grade}
              >
                <div className={s.gradeSmile}></div>
              </Link>
              <Link
                to={'../favourites'}
                state={{ from: location }}
                className={s.grade}
              >
                <div className={s.gradeHeart}></div>
              </Link>
              <Link
                to={'../dislikes'}
                state={{ from: location }}
                className={s.grade}
              >
                <div className={s.gradeSad}></div>
              </Link>
            </div>
          </div>
          <div className={s.sectionDetails}>
            <div className={s.navlink}>
              <button className={s.back} onClick={onGoBack}>
                <div className={s.backArrow}></div>
              </button>
              <div className={s.linkActive}>Breeds</div>
              <div className={s.linkActiveId}>{id}</div>
            </div>
            {pending === false ? (
              <div className={s.thumbImg}>
                <div className={s.img}></div>
                <img
                  src={img}
                  alt="cat"
                  className={s.catPhoto}
                  width="640px"
                  height="360px"
                />
                <div className={s.listButton}>
                  <button
                    className={activeId === 0 ? s.activeLink : s.buttonSwitcher}
                    onClick={() => {
                      setPage(0);
                      setActiveId(0);
                    }}
                  ></button>
                  <button
                    className={activeId === 1 ? s.activeLink : s.buttonSwitcher}
                    onClick={() => {
                      setPage(1);
                      setActiveId(1);
                    }}
                  ></button>
                  <button
                    className={activeId === 2 ? s.activeLink : s.buttonSwitcher}
                    onClick={() => {
                      setPage(2);
                      setActiveId(2);
                    }}
                  ></button>
                  <button
                    className={activeId === 3 ? s.activeLink : s.buttonSwitcher}
                    onClick={() => {
                      setPage(3);
                      setActiveId(3);
                    }}
                  ></button>
                  <button
                    className={activeId === 4 ? s.activeLink : s.buttonSwitcher}
                    onClick={() => {
                      setPage(4);
                      setActiveId(4);
                    }}
                  ></button>
                </div>
              </div>
            ) : (
              <Loader />
            )}
            <div className={s.infoBreed}>
              <p className={s.infoBreedFamily}>Family companion cat</p>

              {breed.map(({ temperament, id, origin, weight, life_span }) => (
                <div key={id} className={s.containerInfo}>
                  <p className={s.temperament}>
                    <span className={s.temperamentTitle}>Temperament:</span>{' '}
                    {temperament}
                  </p>
                  <div className={s.characteristics}>
                    <p className={s.characteristicsItem}>
                      <span className={s.characteristicsTitle}>Origin:</span>{' '}
                      {origin}
                    </p>
                    <p className={s.characteristicsItem}>
                      <span className={s.characteristicsTitle}>Weight:</span>{' '}
                      {weight.metric}
                    </p>
                    <p className={s.characteristicsItem}>
                      <span className={s.characteristicsTitle}>Life span:</span>{' '}
                      {life_span}
                    </p>
                  </div>
                </div>
              ))}
              <div className={s.infoBreedId}>{id}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreedsDetails;
