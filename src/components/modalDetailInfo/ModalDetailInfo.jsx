import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import Features from '../features/Features';
import Reviews from '../reviews/Reviews';
import Loader from '../loader/Loader';
import styles from './ModalDetailInfo.module.css';
import OrderForm from '../orderForm/OrderForm';

const ModalDetailInfo = ({ car }) => {
  const [activeTab, setActiveTab] = useState('features');

  if (!car) {
    return <Loader />;
  }

  const { name, gallery, price, rating, reviews, location, description } = car;
  return (
    <div>
      <div className={styles['modals-sub-container']}>
        <h2 className={styles['modal-detail-title']}>{name}</h2>
        <p className={styles.rating}>
          <svg className={styles['rating-icon']} width={16} height={16}>
            <use href={`${sprite}#icon-rating`}></use>
          </svg>{' '}
          {rating} ({reviews.length} Reviews)
        </p>
        <p className={styles.location}>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-location`}></use>
          </svg>
          {location}
        </p>
        <p className={styles.price}>&#8364;{price}</p>
      </div>
      <ul className={styles['modal-gallery']}>
        {gallery.map((photo, index) => {
          return (
            <li key={index}>
              <img src={photo} alt="Camper photo" />
            </li>
          );
        })}
      </ul>
      <p className={styles.descr}>{description}</p>
      <div className={styles['modal-form-container']}>
        <button
          className={activeTab === 'features' ? styles.active : ''}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button
          className={activeTab === 'reviews' ? styles.active : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
        <div className={styles['active-container']}>
          {activeTab === 'features' && <Features car={car} />}
          {activeTab === 'reviews' && <Reviews reviews={reviews} />}
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default ModalDetailInfo;
