import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars } from '../redux/cars/operations';
import CarsList from '../components/carsList/CarsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCars(page));
  }, [dispatch, page]);
  return (
    <>
      <CarsList setPage={setPage} />
    </>
  );
};

export default CatalogPage;
