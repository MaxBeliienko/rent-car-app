import styles from './CarItem.module.css';
import sprite from '../../img/sprite.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
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
  console.log(isFavorite);

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
    <div>
      <img width={290} height={310} src={gallery[0]} alt="Camper photo" />
      <h2>{name}</h2>
      <p>
        &#8364;{price}
        <button onClick={handleToggleFavorite}>
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
      <p>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-rating`}></use>
        </svg>{' '}
        {rating} ({reviews.length} Reviews)
      </p>
      <p>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-location`}></use>
        </svg>
        {location}
      </p>
      <p>{description}</p>
      <ul>
        <li>{adults} adults</li>
        <li>{transmission}</li>
        <li>{engine}</li>
        {details.kitchen > 0 && <li>Kitchen</li>}
        <li>{details.beds} beds</li>
        {details.airConditioner > 0 && <li>AC</li>}
      </ul>
      <button onClick={openModal}>Show more</button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ModalDetailInfo car={selectedCar} />
      </Modal>
    </div>
  );
};

export default CarItem;
