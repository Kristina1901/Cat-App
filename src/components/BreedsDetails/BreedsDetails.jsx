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
// import { getCatsBreedsbyName } from '../../services/cats-api';
import { getCatsBreedsImage } from '../../services/cats-api';
const BreedsDetails = () => {
  const [cat, setCat] = useState([]);
  const [items, setItems] = useState([]);
  const [breed, setBreed] = useState([]);
  const [page, setPage] = useState(0);
  const [img, setImg] = useState('');
  const [activeLink, setActiveLink] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (id !== '' && page === 0) {
      getCatsBreedsImage(id, 0)
        .then(data => {
          setImg(data[0].url);
          setBreed(data[0].breeds);
        })
        .catch(console.log);
    }
    if (page !== 0) {
      getCatsBreedsImage(id, page)
        .then(data => {
          setImg(data[0].url);
          setBreed(data[0].breeds);
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
                  to={''}
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
          <Form />
          <div className={s.sectionVoting}>
            <div className={s.navlink}>
              <button className={s.back} onClick={onGoBack}>
                <div className={s.backArrow}></div>
              </button>
              <div className={s.linkActive}>Breeds</div>
              <div className={s.linkActiveId}>{id}</div>
            </div>
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
                  className={s.buttonSwitcher}
                  onClick={() => setPage(0)}
                ></button>
                <button
                  className={s.buttonSwitcher}
                  onClick={() => setPage(1)}
                ></button>
                <button
                  className={s.buttonSwitcher}
                  onClick={() => {
                    setPage(2);
                  }}
                ></button>
                <button
                  className={s.buttonSwitcher}
                  onClick={() => setPage(3)}
                ></button>
                <button
                  className={s.buttonSwitcher}
                  onClick={() => {
                    setPage(4);
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreedsDetails;
