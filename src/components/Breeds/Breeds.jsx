import { getCatsBreeds } from '../../services/cats-api';
import { getCatsBreedsImg } from '../../services/cats-api';
import { useState, useEffect } from 'react';
import customStylesGrids from '../../select/selectStylesGrids';
import Logo from 'components/Logo/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import s from './Breeds.module.css';
import Form from 'components/Form/Form';
import Select from 'react-select';
import selectStyles from '../../select/selectStyles';
import Loader from 'components/Loader/Loader';

const options = [
  { value: 5, label: 'Limit: 5' },
  { value: 10, label: 'Limit: 10' },
  { value: 15, label: 'Limit: 15' },
  { value: 20, label: 'Limit: 20' },
];
const Breeds = ({ changeValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [listBreeds, setListBreeds] = useState([]);
  const [listBreedsDefaultClean, setListBreedsDefaultClean] = useState([]);
  const [selectedBreedsQuantity, setSelectedBreedsQuantity] = useState(5);
  const [conditionButton, setConditionButton] = useState(false);
  const [deletedPage, setDeletedPage] = useState(false);
  const [selectedBreedsArray, setselectedBreedsArray] = useState([]);
  const [page, setPage] = useState(0);
  const [markSort, setmarkSort] = useState(true);
  const [downList, setdownList] = useState([]);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (page === 0 && selectedBreedsQuantity === 5) {
      setPending(true);
      getCatsBreeds().then(data => setListBreeds(data));
      getCatsBreedsImg(5, 0)
        .then(data => getFlatArray(data))
        .then(data => {
          setListBreedsDefaultClean(data);
          setPending(false);
        });
      setConditionButton(false);
    }
    if (selectedBreedsQuantity !== 5 && page !== 0) {
      setPending(true);
      getCatsBreedsImg(selectedBreedsQuantity, page).then(data => {
        if (data.length === selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(false);
          setmarkSort(true);
        }
        if (data.length !== selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(true);
          setmarkSort(true);
        }
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 5 && page !== 0) {
      setPending(true);
      getCatsBreedsImg(selectedBreedsQuantity, page).then(data => {
        if (data.length === selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(false);
          setmarkSort(true);
        }
        if (data.length !== selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(true);
        }
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 10 && page === 0 && deletedPage === true) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      Promise.all([arr1, arr2]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }

    if (selectedBreedsQuantity === 10 && page === 0 && deletedPage === false) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      Promise.all([arr1, arr2]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 15 && page === 0 && deletedPage === false) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      let arr3 = getCatsBreedsImg(5, 2);
      Promise.all([arr1, arr2, arr3]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 15 && page === 0 && deletedPage === true) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      let arr3 = getCatsBreedsImg(5, 2);
      Promise.all([arr1, arr2, arr3]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 20 && page === 0 && deletedPage === false) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      let arr3 = getCatsBreedsImg(5, 2);
      let arr4 = getCatsBreedsImg(5, 3);
      Promise.all([arr1, arr2, arr3, arr4]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }
    if (selectedBreedsQuantity === 20 && page === 0 && deletedPage === true) {
      setPending(true);
      let arr1 = getCatsBreedsImg(5, 0);
      let arr2 = getCatsBreedsImg(5, 1);
      let arr3 = getCatsBreedsImg(5, 2);
      let arr4 = getCatsBreedsImg(5, 3);
      Promise.all([arr1, arr2, arr3, arr4]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setmarkSort(true);
        setPending(false);
      });
    }
    if (selectedOption !== null) {
      // let arrayByname = listBreeds.filter(item => item.name === selectedOption);
      setselectedBreedsArray(selectedOption);
    }
  }, [selectedBreedsQuantity, page, deletedPage, selectedOption]);
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  function getBreedsName() {
    let array = listBreeds.map(item => item.name);
    let options = array.map(item => {
      return { label: item, value: item };
    });
    return options;
  }
  function getFlatArray(array) {
    let cleanArray = array.filter(
      item => item.hasOwnProperty('image') === true
    );
    return cleanArray;
  }
  function handleIncrement() {
    setPage(page + 1);
  }
  function handleDecrement() {
    setPage(page - 1);
    setDeletedPage(true);
  }
  function cheakGreeds() {
    if (selectedBreedsQuantity === 10) {
      return selectedBreedsQuantity + 2;
    }
    if (selectedBreedsQuantity === 5) {
      return selectedBreedsQuantity + 1;
    }
    if (selectedBreedsQuantity === 15) {
      return selectedBreedsQuantity + 2;
    }
    if (selectedBreedsQuantity === 20) {
      return selectedBreedsQuantity + 4;
    }
  }
  const divStyle = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 90px)',
    gridTemplateRows: `repeat(${cheakGreeds()}, 62px)`,
    gridGap: '20px',
  };
  function filteredByAZ() {
    setmarkSort(true);
  }
  function filteredByZA() {
    setmarkSort(false);
    let filteredArray = Object.assign([], listBreedsDefaultClean);
    filteredArray.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
    setdownList(filteredArray);
  }
  let renderList = null;
  if (selectedBreedsArray.length === 0 && markSort === true) {
    renderList = listBreedsDefaultClean.map(({ id, image, name }) => (
      <li key={id} className={s.gridContainerItem}>
        <Link
          to={`./breedsDetails/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          <div className={s.modalName}>
            <div className={s.modalNameBreed}>{name}</div>
          </div>
          <img src={image.url} alt="cat" className={s.gridContainerImg} />
        </Link>
      </li>
    ));
  }
  if (selectedBreedsArray.length === 0 && markSort !== true) {
    renderList = downList.map(({ id, image, name }) => (
      <li key={id} className={s.gridContainerItem}>
        <Link
          to={`./breedsDetails/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          <div className={s.modalName}>
            <div className={s.modalNameBreed}>{name}</div>
          </div>
          <img src={image.url} alt="cat" className={s.gridContainerImg} />
        </Link>
      </li>
    ));
  }
  if (selectedBreedsArray.length !== 0) {
    renderList = selectedBreedsArray.map(({ id, image, name }) => (
      <li key={id} className={s.gridContainerItem}>
        <Link
          to={`./breedsDetails/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          <div className={s.modalName}>
            <div className={s.modalNameBreed}>{name}</div>
          </div>
          <img src={image.url} alt="cat" className={s.gridContainerImg} />
        </Link>
      </li>
    ));
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
                    to={'#'}
                    state={{ from: location }}
                    className={styles.linkActive}
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

            <div className={s.sectionBreeds}>
              <div className={s.navlink}>
                <button className={s.back} onClick={onGoBack}>
                  <div className={s.backArrow}></div>
                </button>
                <div className={s.linkActive}>Breeds</div>

                <Select
                  options={getBreedsName()}
                  loadOptions={getBreedsName}
                  defaultValue={selectedOption}
                  styles={selectStyles}
                  onChange={({ value }) => setSelectedOption(value)}
                  placeholder="All breeds"
                />
                <Select
                  options={options}
                  loadOptions={getBreedsName}
                  defaultValue={selectedOption}
                  styles={customStylesGrids}
                  onChange={({ value }) => setSelectedBreedsQuantity(value)}
                  placeholder="Limit: 5"
                />
                <button className={s.sortingDown} onClick={filteredByAZ}>
                  <div className={s.sortingDownImg}></div>
                </button>
                <button className={s.sortingUp} onClick={filteredByZA}>
                  <div className={s.sortingUpImg}></div>
                </button>
              </div>
              <div className={s.gridContainerWidth}>
                {pending === false ? (
                  <ul style={divStyle}>{renderList}</ul>
                ) : (
                  <Loader />
                )}
              </div>
              <div className={s.buttonsContainerPagination}>
                <button
                  className={page !== 0 ? s.buttonPrevActive : s.buttonPrev}
                  onClick={handleDecrement}
                  disabled={page !== 0 ? false : true}
                >
                  Prev
                </button>
                <button
                  className={
                    conditionButton === false
                      ? s.buttonNext
                      : s.buttonNextDisable
                  }
                  onClick={handleIncrement}
                  disabled={conditionButton}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breeds;
