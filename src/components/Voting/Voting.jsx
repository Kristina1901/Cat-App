import { getCatsVote } from '../../services/cats-api';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import s from './Voting.module.css';
import Logo from 'components/Logo/Logo';
import cat_default from './img/cat_default.jpg';
import { nanoid } from 'nanoid';
import smile_green from './img/smile_green.svg';
import heart_red from './img/heart_red.svg';
import sad_yellow from './img/sad_yellow.svg';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import Form from 'components/Form/Form';
import styles from '../Logo/Logo.module.css';
import Loader from 'components/Loader/Loader';
const Voting = ({
  changeLikes,
  changeFavourites,
  changeDislikes,
  changeValue,
}) => {
  const [cat, setCat] = useState('');
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (cat === '') {
      setPending(true);
      getCatsVote().then(data => {
        setCat(data);
        setPending(false);
      });
    }
  }, [cat]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  function getCurrentTimeString2(dots) {
    dots = Math.round(Date.now() / 1000) % 2;
    let timeString = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '');
    return timeString;
  }
  const addItemPositiveList = () => {
    const item = {
      id: nanoid(),
      time: getCurrentTimeString2(),
      idCat: cat[0].id,
      message: 'was added to Likes',
      pic: smile_green,
    };
    setPending(true);
    setItems(previtems => [item, ...previtems]);
    changeLikes(cat);
  };
  const addItemFavoritesList = () => {
    const item = {
      id: nanoid(),
      time: getCurrentTimeString2(),
      idCat: cat[0].id,
      message: 'was added to Favourites',
      pic: heart_red,
    };
    setPending(true);
    setItems(previtems => [item, ...previtems]);
    changeFavourites(cat);
  };
  const addItemDislikedList = () => {
    const item = {
      id: nanoid(),
      time: getCurrentTimeString2(),
      idCat: cat[0].id,
      message: 'was added to Dislakes',
      pic: sad_yellow,
    };
    setPending(true);
    setItems(previtems => [item, ...previtems]);
    changeDislikes(cat);
  };
  const newFetch = () => {
    let promise = new Promise(function (resolve) {
      resolve(
        getCatsVote().then(data => {
          setCat(data);
          setPending(false);
        })
      );
    });

    return promise;
  };
  const location = useLocation();
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
                  to={'#'}
                  state={{ from: location }}
                  className={styles.linkActive}
                >
                  Voting
                </Link>
              </li>
              <li key={nanoid()} className={styles.item}>
                <div className={styles.imgBreeds}>
                  <img src={breeds} alt="breeds" width="117px" />
                </div>
                <Link
                  to={'../breeds'}
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
          <div className={s.sectionVoting}>
            <div className={s.navlink}>
              <button className={s.back} onClick={onGoBack}>
                <div className={s.backArrow}></div>
              </button>
              <div className={s.linkActive}>Voting</div>
            </div>
            {pending === false ? (
              <div className={s.thumbImg}>
                <img
                  src={cat.length === 0 ? cat_default : cat[0].url}
                  alt="cat"
                  width="640px"
                  height="360px"
                  className={s.catPhoto}
                />
                <div className={s.listButton}>
                  <button
                    className={s.itemButtonFirst}
                    onClick={() => {
                      setPending(true);
                      addItemPositiveList();
                      newFetch();
                    }}
                  >
                    <div className={s.itemButtonSmile}></div>
                  </button>
                  <button
                    className={s.itemButtonSecond}
                    onClick={() => {
                      setPending(true);
                      addItemFavoritesList();
                      newFetch();
                    }}
                  >
                    <div className={s.itemButtonHeart}></div>
                  </button>
                  <button
                    className={s.itemButtonThird}
                    onClick={() => {
                      setPending(true);
                      addItemDislikedList();
                      newFetch();
                    }}
                  >
                    <div className={s.itemButtonSad}></div>
                  </button>
                </div>
              </div>
            ) : (
              <Loader />
            )}

            <ul className={s.listLikes}>
              {items.map(({ id, time, idCat, message, pic }) => (
                <li key={id} className={s.listLikesItem}>
                  <p className={s.listLikesTime}>{time}</p>
                  <p className={s.listLikesMessage}>
                    Image ID:{' '}
                    <span className={s.listLikesPhotoId}>{idCat}</span>{' '}
                    {message}
                  </p>
                  <img src={pic} className={s.picturesCat} alt="smile" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;
