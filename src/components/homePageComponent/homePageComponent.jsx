import { NavLink } from 'react-router-dom';
import styles from './homePageComponent.module.css';

const HomePageComponent = () => {
  return (
    <div className={styles['home-page-container']}>
      <header className={styles.header}>
        <h1 className={styles.title}>Explore the World with Our Campers</h1>
        <NavLink to="/catalog" className={styles.catalogLink}>
          View Our Camper Catalog
        </NavLink>
        <p className={styles.description}>
          Rent a fully equipped camper van and start your adventure with comfort
          and style. Whether you're planning a weekend getaway or a
          cross-country road trip, our campers have everything you need.
        </p>
      </header>

      <section>
        <h2 className={styles.subtitle}>Our Campers</h2>
        <ul className={styles.gallery}>
          <li>
            <img src="../../img/home-gallery1.jpg" alt="Camper photo" />
          </li>
          <li>
            <img src="../../img/home-gallery2.jpg" alt="Camper photo" />
          </li>
          <li>
            <img src="../../img/home-gallery3.jpg" alt="Camper photo" />
          </li>
        </ul>
      </section>
      <section className={styles.advantages}>
        <h2 className={styles.subtitle}>Why Choose Us?</h2>
        <ul className={styles.advantagesList}>
          <li className={styles.advantageItem}>
            <strong>Top-Notch Vehicles:</strong> Our fleet includes the latest
            models with the highest safety and comfort standards.
          </li>
          <li className={styles.advantageItem}>
            <strong>Flexible Rentals:</strong> Rent a camper for a day, a week,
            or a month. We offer flexible terms to suit your travel plans.
          </li>
          <li className={styles.advantageItem}>
            <strong>24/7 Support:</strong> We provide round-the-clock assistance
            to ensure your trip goes smoothly.
          </li>
          <li className={styles.advantageItem}>
            <strong>Affordable Prices:</strong> Enjoy competitive rates without
            compromising on quality.
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <NavLink to="/catalog" className={styles.catalogLink}>
          View Our Camper Catalog
        </NavLink>
      </footer>
    </div>
  );
};

export default HomePageComponent;
