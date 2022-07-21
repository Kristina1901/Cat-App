import s from 'components/Loader/Loader.module.css';
const Loader = () => (
  <div className={s.loader}>
    <div class={s.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
