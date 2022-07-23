import Logo from 'components/Logo/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import s from './Dislikes.module.css';
import Form from 'components/Form/Form';
const Dislikes = ({ dislikes, changeQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  const divStyle = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 90px)',
    gridTemplateRows: `repeat(8, 66px)`,
    gridGap: '20px',
  };
  const divStyleSingle = {
    marginTop: '20px',
    display: 'block',
    height: '670px',
  };
  let list;
  if (dislikes.length === 0) {
    list = (
      <div style={divStyleSingle}>
        <p className={s.nofound}>No item found</p>
      </div>
    );
  }
  if (dislikes.length !== 0) {
    list = (
      <ul style={divStyle}>
        {dislikes.map(({ id, url }) => (
          <li key={id} className={s.gridContainerItem}>
            <img src={url} alt="cat" className={s.gridContainerImg} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
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
              <Form changeQuery={changeQuery} />
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
                  to={'#'}
                  state={{ from: location }}
                  className={s.activeLinKbutton}
                >
                  <div className={s.activeLinKbuttonPic}></div>
                </Link>
              </div>
            </div>
            <div className={s.sectionBreeds}>
              <div className={s.navlink}>
                <button className={s.back} onClick={onGoBack}>
                  <div className={s.backArrow}></div>
                </button>
                <div className={s.linkActive}>Dislikes</div>
              </div>
              <div className={s.gridContainerWidth}>{list}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dislikes;
