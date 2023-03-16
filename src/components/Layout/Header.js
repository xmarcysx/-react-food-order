import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import imgMeals from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={imgMeals} alt="meals" />
      </div>
    </>
  );
};
export default Header;
