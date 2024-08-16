import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import { fetchAllCars } from '../../redux/cars/operations';
import CarItem from '../carItem/CarItem';
import { useEffect, useState } from 'react';

const CarsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const visibleCars = useSelector(selectCars);
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
    <>
      <ul>
        {visibleCars.map(car => {
          const { _id } = car;
          return (
            <li key={_id}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};

export default CarsList;
