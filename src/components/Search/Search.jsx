import { searchByname } from '../../services/cats-api';
import { getImage } from '../../services/cats-api';
import { useState, useEffect } from 'react';
import Logo from 'components/Logo/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import s from './Search.module.css';
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';

const Search = ({ query }) => {
  const [pending, setPending] = useState(false);
  const [img, setImg] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (query === '') {
      return;
    }
    if (query !== '') {
      setPending(true);
      searchByname(query).then(data => {
        const arr = getBreedsId(data);

        let k = arr.map(item => getImage(item));
        Promise.all(k)
          .then(result => {
            setImg(result.flat());
          })
          .catch(error => {
            console.log(error);
          });

        setPending(false);
      });
    }
  }, [query]);
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  const getBreedsId = arr => {
    let array = arr.map(item => item.id);
    return array;
  };
  const divStyle = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 90px)',
    gridTemplateRows: `repeat(8, 66px)`,
    gridGap: '20px',
  };

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
              <Form activeLink={true} query={query} />
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

            <div className={s.sectionBreeds}>
              <div className={s.navlink}>
                <button className={s.back} onClick={onGoBack}>
                  <div className={s.backArrow}></div>
                </button>
                <div className={s.linkActive}>Search</div>
              </div>
              <p className={s.searchText}>
                Search results for:<span className={s.value}> {query}</span>
              </p>
              <div className={s.gridContainerWidth}>
                {pending === false ? (
                  <ul style={divStyle}>
                    {img.map(({ url, id, breeds }) => (
                      <li key={id} className={s.gridContainerItem}>
                        <div className={s.modalName}>
                          <div className={s.modalNameBreed}>
                            {breeds[0].name}
                          </div>
                        </div>

                        <img
                          src={url}
                          alt="cat"
                          className={s.gridContainerImg}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
