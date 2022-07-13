import s from './Form.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import glass from './img/glass.svg';
const Form = () => {
  const location = useLocation();
  return (
    <div className={s.wrapperForm}>
      <form className={s.form} id="form">
        <input
          className={s.searching}
          type="text"
          autoComplete="off"
          placeholder="Search for breeds by name"
          name="breeds"
          // onChange={handleInputChange}
        />
        <button type="submit" className={s.buttonSubmit}>
          <img src={glass} alt="glass" />
        </button>
      </form>
      <div className={s.thumbLinks}>
        <Link to={'/'} state={{ from: location }} className={s.grade}>
          <div className={s.gradeSmile}></div>
        </Link>
        <Link to={'/'} state={{ from: location }} className={s.grade}>
          <div className={s.gradeHeart}></div>
        </Link>
        <Link to={'/'} state={{ from: location }} className={s.grade}>
          <div className={s.gradeSad}></div>
        </Link>
      </div>
    </div>
  );
};
export default Form;
