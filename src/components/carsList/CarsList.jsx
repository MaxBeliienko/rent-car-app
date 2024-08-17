import styles from './CarsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { selectCars } from '../../redux/cars/selectors';
import { selectFilteredCars } from '../../redux/filters/selectors';
import { fetchAllCars } from '../../redux/cars/operations';
import CarItem from '../carItem/CarItem';
import Button from '../button/Button';
import { useEffect, useState } from 'react';

const CarsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const visibleCars = useSelector(selectFilteredCars);
  useEffect(() => {
    if (page === 1 || visibleCars.length === 0) {
      dispatch(fetchAllCars(page));
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => {
      const nextPage = prevPage + 1;
      dispatch(fetchAllCars({ page: nextPage }));
      return nextPage;
    });
  };

  return (
    <div className={styles['cars-list-wrapper']}>
      <ul className={styles['cars-list-container']}>
        {visibleCars.map(car => {
          const { _id } = car;
          return (
            <li key={_id}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
      <Button text="Load more" variant="load-more" onClick={handleLoadMore} />
    </div>
  );
};

export default CarsList;
