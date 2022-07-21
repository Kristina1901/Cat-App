import s from './Form.module.css';
import { Link, useLocation } from 'react-router-dom';
import glass from './img/glass.svg';
const Form = () => {
  const location = useLocation();
  return (
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
  );
};
export default Form;
