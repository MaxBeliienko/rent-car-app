import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/favorites/selectors';
import { NavLink } from 'react-router-dom';
import CarItem from '../../components/carItem/CarItem';
import styles from './FavoritePageComponent.module.css';

const FavoritePageComponent = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <div className={styles['favorites-container']}>
      <h2 className={styles['favorites-title']}>What interested me</h2>
      <NavLink to="/catalog" className={styles['favorites-back-btn']}>
        Back to catalog
      </NavLink>
      <ul className={styles['favorites-list']}>
        {favoriteCars.map(car => (
          <li key={car._id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePageComponent;
