import CarsList from '../components/carsList/CarsList';
import FilterBlock from '../components/filterBlock/FilterBlock';
import styles from '../components/filterBlock/FilterBlock.module.css';

const CatalogPage = () => {
  return (
    <section className={styles['catalog-page-section']}>
      <FilterBlock />
      <CarsList />
    </section>
  );
};

export default CatalogPage;
