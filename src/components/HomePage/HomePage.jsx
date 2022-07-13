import Logo from 'components/Logo/Logo';
import s from './HomePage.module.css';
import cuddle from './img/cuddle.png';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import styles from '../Logo/Logo.module.css';

const HomePage = () => {
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
                  to={'./voting'}
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
                  to={'./breeds'}
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
        <div className={s.main}>
          <img src={cuddle} alt="cat" className={s.cat} width="775px" />
          <div className={s.pad}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
