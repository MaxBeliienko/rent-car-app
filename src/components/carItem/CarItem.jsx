import styles from './CarItem.module.css';
import sprite from '../../img/sprite.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import ModalDetailInfo from '../modalDetailInfo/ModalDetailInfo';
import { fetchDetailCar } from '../../redux/cars/operations';
import { clearSelectedCar } from '../../redux/cars/slice';
import { selectDetailCar } from '../../redux/cars/selectors';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';

const CarItem = ({ car }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const selectedCar = useSelector(selectDetailCar);

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(car._id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car._id));
  };

  const openModal = () => {
    setModalOpen(true);
    dispatch(fetchDetailCar(car._id));
  };

  const closeModal = () => {
    setModalOpen(false);
    dispatch(clearSelectedCar());
  };

  const {
    name,
    gallery,
    price,
    details,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
  } = car;

  return (
    <div className={styles['car-item-container']}>
      <img
        className={styles['car-image']}
        src={gallery[0]}
        alt="Camper photo"
      />
      <div className={styles['car-info-container']}>
        <div className={styles['car-main-info']}>
          <h2 className={styles['car-name']}>{name}</h2>
          <p className={styles['car-price']}>
            &#8364;{price}
            <button
              className={styles['favorite-button']}
              onClick={handleToggleFavorite}
            >
              {isFavorite ? (
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-favorite`}></use>
                </svg>
              ) : (
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-heart`}></use>
                </svg>
              )}
            </button>
          </p>
          <p className={styles['car-rating']}>
            <svg className={styles['icon-rating']} width={16} height={16}>
              <use href={`${sprite}#icon-rating`}></use>
            </svg>{' '}
            {rating} ({reviews.length} Reviews)
          </p>
          <p className={styles['car-location']}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-location`}></use>
            </svg>{' '}
            {location}
          </p>
          <p className={styles['truncated-text']}>
            {description} <span className={styles.tooltip}>{description}</span>
          </p>
        </div>
        {/* <ul>
          <li>{adults} adults</li>
          <li>{transmission}</li>
          <li>{engine}</li>
          {details.kitchen > 0 && <li>Kitchen</li>}
          <li>{details.beds} beds</li>
          {details.airConditioner > 0 && <li>AC</li>}
        </ul> */}
        <Button text="Show more" variant="show-more" onClick={openModal} />
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <ModalDetailInfo car={selectedCar} />
        </Modal>
      </div>
    </div>
  );
};

export default CarItem;
