import CarsList from '../components/carsList/CarsList';
import FilterBlock from '../components/filterBlock/FilterBlock';

const CatalogPage = () => {
  return (
    <section>
      <FilterBlock />
      <CarsList />
    </section>
  );
};

export default CatalogPage;
