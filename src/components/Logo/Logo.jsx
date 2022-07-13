import { Link, useLocation } from 'react-router-dom';
import s from './Logo.module.css';
import logo from './img/logo.png';
const Logo = () => {
  const location = useLocation();
  return (
    <div>
      <Link to={'/'} state={{ from: location }} className={s.logo}>
        <img src={logo} alt="logo" width="106px" className={s.logoImg} />
      </Link>
      <h1 className={s.heading}>Hi intern!</h1>
      <p className={s.greetings}>Welcome to MI 2022 Front-end test</p>
      <p className={s.call}>Lets start using The Cat API</p>
    </div>
  );
};
export default Logo;
