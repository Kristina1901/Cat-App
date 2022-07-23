import s from './Form.module.css';
import { useState } from 'react';
import glass from './img/glass.svg';
const Form = ({ changeValue, activeLink, value }) => {
  const [breedName, setBreedName] = useState('');
  const handleNameChange = event => {
    setBreedName(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (breedName.trim() === '') {
      alert('Enter a keyword to search!');
      return;
    }

    changeValue(breedName);
  };

  return (
    <form
      className={activeLink === true ? s.styleform : s.form}
      id="form"
      onSubmit={handleSubmit}
    >
      <input
        className={s.searching}
        type="text"
        autoComplete="off"
        placeholder="Search for breeds by name"
        name="breeds"
        onChange={handleNameChange}
        value={value}
      />
      <button type="submit" className={s.buttonSubmit}>
        <img src={glass} alt="glass" />
      </button>
    </form>
  );
};
export default Form;
