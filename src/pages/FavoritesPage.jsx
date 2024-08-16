import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFavoriteCars } from '../redux/favorites/selectors';
import { selectCars } from '../redux/cars/selectors';
import CarItem from '../components/carItem/CarItem';
import { fetchAllCars } from '../redux/cars/operations';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  // const allCars = useSelector(selectCars);

  // useEffect(() => {
  //   if (allCars.length === 0) {
  //     dispatch(fetchAllCars());
  //   }
  // }, [dispatch, favoriteCars.length]);

  return (
    <div>
      <h2>My favorite cars</h2>
      <ul>
        {favoriteCars.map(car => (
          <li key={car._id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
