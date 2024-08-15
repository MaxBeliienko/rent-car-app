import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import { fetchAllCars } from '../../redux/cars/operations';
import CarItem from '../carItem/CarItem';

const CarsList = ({ setPage }) => {
  const dispatch = useDispatch();
  const visibleCars = useSelector(selectCars);

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
