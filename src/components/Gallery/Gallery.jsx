import { useState, useEffect } from 'react';
import { getCatsGallery } from '../../services/cats-api';
import { getCatsBreeds } from '../../services/cats-api';
import Logo from 'components/Logo/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';
import { nanoid } from 'nanoid';
import vote from '../Logo/img/vote.png';
import breeds from '../Logo/img/breeds.png';
import gallery from '../Logo/img/gallery.png';
import s from './Gallery.module.css';
import Form from 'components/Form/Form';
import Select from 'react-select';
import order from '../../select/order';
import typeimg from '../../select/typeimg';
import breedslist from '../../select/breedslist';
import limit from '../../select/limit';
import Modal from '../Modal/Modal';
import Loader from 'components/Loader/Loader';

const optionsImg = [
  { value: 'All', label: 'All' },
  { value: 'Static', label: 'Static' },
  { value: 'Animated', label: 'Animated' },
];
const optionsOrder = [
  { value: 'Random', label: 'Random' },
  { value: 'Desc', label: 'Desc' },
  { value: 'Asc', label: 'Asc' },
];
const optionsLimit = [
  { value: 5, label: '5 items per page' },
  { value: 10, label: '10 items per page' },
  { value: 15, label: '15 items per page' },
  { value: 20, label: '20 items per page' },
];
const Gallery = ({ getGalleryFavourites, changeQuery }) => {
  const [orderValue, setOrderValue] = useState('Random');
  const [typeImg, setTypeImg] = useState('');
  const [breedId, setBreedId] = useState('');
  const [listBreeds, setListBreeds] = useState([]);
  const [listBreedsDefaultClean, setListBreedsDefaultClean] = useState([]);
  const [selectedBreedsQuantity, setSelectedBreedsQuantity] = useState(5);
  const [conditionButton, setConditionButton] = useState(false);
  const [deletedPage, setDeletedPage] = useState(false);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(null);
  const [pending, setPending] = useState(false);
  const [cat, setCat] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      page === 0 &&
      selectedBreedsQuantity === 5 &&
      typeImg === '' &&
      breedId === '' &&
      orderValue === 'Random' &&
      update === null && cat === null
    ) {
      setPending(true);
      getCatsBreeds().then(data => setListBreeds(data));

      getCatsGallery(selectedBreedsQuantity, typeImg, orderValue, page, breedId)
        .then(data => getFlatArray(data))
        .then(data => {
          setListBreedsDefaultClean(data);
          setPending(false);
        });
      setConditionButton(false);
      setUpdate(false);
      setCat(false)
      
    }
    
    if (
      page === 0 &&
      selectedBreedsQuantity === 5 &&
      typeImg === '' &&
      breedId === '' &&
      orderValue === 'Random' &&
      update === false && cat === true
    ) {
      setPending(true);
       getCatsGallery(selectedBreedsQuantity, typeImg, orderValue, page, breedId)
        .then(data => getFlatArray(data))
        .then(data => {
          setListBreedsDefaultClean(data);
          setPending(false);
        });
      setConditionButton(false);
      setUpdate(false);
     
      
      
    }
    if (
      (selectedBreedsQuantity !== 5 ||
        typeImg !== '' ||
        breedId !== '' ||
        orderValue !== 'Random') &&
      page === 0 &&
      update === false && cat !== null
    ) {
      setPending(true);
       getCatsGallery(selectedBreedsQuantity, typeImg, orderValue, page, breedId)
        .then(data => getFlatArray(data))
        .then(data => {
          setListBreedsDefaultClean(data);
          setPending(false);
        });
      setConditionButton(false);
      setCat(true)
      
    }
    if (
      (!typeImg || !breedId || !orderValue || !selectedBreedsQuantity) &&
      page !== 0 
    ) {
      setPending(true);
      getCatsGallery(
        selectedBreedsQuantity,
        typeImg,
        orderValue,
        page,
        breedId
      ).then(data => {
        if (data.length === selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(false);
          setUpdate(false);
        }
        if (data.length !== selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(true);
          setUpdate(false);
        }
        setPending(false);
      });
    }

    if (orderValue === '' && update === true) {
      setPending(true);
      getCatsGallery(
        selectedBreedsQuantity,
        typeImg,
        orderValue,
        page,
        breedId
      ).then(data => {
        if (data.length === selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(false);
        }
        if (data.length !== selectedBreedsQuantity) {
          setListBreedsDefaultClean([...getFlatArray(data)]);
          setConditionButton(true);
        }
        setUpdate(false);
        setPending(false);
        setOrderValue('Random');
      });
    }

    if (update === true) {
      setOrderValue('');
    }
    if (
      selectedBreedsQuantity === 10 &&
      page === 0 &&
      deletedPage === true &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 1, breedId);
      Promise.all([arr1, arr2]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }

    if (
      selectedBreedsQuantity === 10 &&
      page === 0 &&
      deletedPage === false &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 0, breedId);
      Promise.all([arr1, arr2]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }
    if (
      selectedBreedsQuantity === 15 &&
      page === 0 &&
      deletedPage === false &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 1, breedId);
      let arr3 = getCatsGallery(5, '', orderValue, 2, breedId);
      Promise.all([arr1, arr2, arr3]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }
    if (
      selectedBreedsQuantity === 15 &&
      page === 0 &&
      deletedPage === true &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 1, breedId);
      let arr3 = getCatsGallery(5, '', orderValue, 2, breedId);

      Promise.all([arr1, arr2, arr3]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }
    if (
      selectedBreedsQuantity === 20 &&
      page === 0 &&
      deletedPage === false &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 1, breedId);
      let arr3 = getCatsGallery(5, '', orderValue, 2, breedId);
      let arr4 = getCatsGallery(5, '', orderValue, 3, breedId);
      Promise.all([arr1, arr2, arr3, arr4]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }
    if (
      selectedBreedsQuantity === 20 &&
      page === 0 &&
      deletedPage === true &&
      orderValue !== 'Random'
    ) {
      setPending(true);
      let arr1 = getCatsGallery(5, '', orderValue, 0, breedId);
      let arr2 = getCatsGallery(5, '', orderValue, 1, breedId);
      let arr3 = getCatsGallery(5, '', orderValue, 2, breedId);
      let arr4 = getCatsGallery(5, '', orderValue, 3, breedId);
      Promise.all([arr1, arr2, arr3, arr4]).then(data => {
        setListBreedsDefaultClean([...getFlatArray(data.flat())]);
        setConditionButton(false);
        setPending(false);
      });
    }
  }, [
    selectedBreedsQuantity,
    page,
    deletedPage,
    orderValue,
    breedId,
    typeImg,
    update,
    cat
  ]);
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  function getBreedsName() {
    let none = { label: 'None', value: '' };
    let options = listBreeds.map(item => {
      return { label: item.name, value: item.id };
    });
    return [none, ...options];
  }
  function getFlatArray(array) {
    let cleanArray = array.filter(item => item.hasOwnProperty('url') === true);
    return cleanArray;
  }
  function handleIncrement() {
    setPage(page + 1);
  }
  function handleDecrement() {
    setPage(page - 1);
    setDeletedPage(true);
  }
  function cheakImg(data) {
    if (data === 'All') {
      setTypeImg('');
    }
    if (data === 'Static') {
      setTypeImg('jpg');
    }
    if (data === 'Animated') {
      setTypeImg('gif');
    }
  }
  function closeModal() {
    setOpen(!open);
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
  const FilterArray = img => {
    let array = listBreedsDefaultClean.find(item => item.id === img);
    getGalleryFavourites(array);
  };
  let renderList = null;

  renderList = listBreedsDefaultClean.map(({ id, url }) => (
    <li key={id} className={s.gridContainerItem}>
      <div className={s.modalName}>
        <button
          className={s.buttonLike}
          onClick={() => FilterArray(id)}
        ></button>
      </div>
      <img src={url} alt="cat" className={s.gridContainerImg} />
    </li>
  ));

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
                    to={'#'}
                    state={{ from: location }}
                    className={styles.linkActive}
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
                <div className={s.linkActiveContainer}>
                  <div className={s.linkActive}>Gallery</div>
                </div>
                <button className={s.upload} onClick={() => setOpen(true)}>
                  Upload
                </button>
              </div>

              <div className={s.containerSelect}>
                <div className={s.selectOrder}>
                  <div className={s.labelSelect}>
                    <span className={s.label}>Order</span>
                    <Select
                      options={optionsOrder}
                      defaultValue={orderValue}
                      styles={order}
                      onChange={({ value }) => setOrderValue(value)}
                      placeholder="Random"
                    />
                  </div>
                  <div className={s.labelSelect}>
                    <span className={s.label}>Type</span>
                    <Select
                      options={optionsImg}
                      defaultValue={typeImg}
                      styles={typeimg}
                      onChange={({ value }) => cheakImg(value)}
                      placeholder="Static"
                    />
                  </div>
                </div>
                <div className={s.selectOrder}>
                  <div>
                    <span className={s.label}>Breed</span>
                    <Select
                      options={getBreedsName()}
                      defaultValue={getBreedsName()}
                      styles={breedslist}
                      onChange={({ value }) => setBreedId(value)}
                      placeholder={'None'}
                    />
                  </div>
                  <div>
                    <span className={s.label}>Limit</span>
                    <Select
                      options={optionsLimit}
                      defaultValue={orderValue}
                      styles={limit}
                      onChange={({ value }) => setSelectedBreedsQuantity(value)}
                      placeholder="All"
                    />
                  </div>
                  <button
                    className={s.arrowUpload}
                    onClick={() => setUpdate(true)}
                  ></button>
                </div>
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
      <Modal trigger={open} onClose={closeModal} />
    </>
  );
};

export default Gallery;