import styles from './CarItem.module.css';

const CarItem = ({ car }) => {
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
      <img src={gallery[0]} alt="Camper photo" />
      <h2>{name}</h2>
      <p>&#8364;{price}</p>
      <p>
        {rating} ({reviews.length} Reviews)
      </p>
      <p>{location}</p>
      <p>{description}</p>
      <ul>
        <li>{adults} adults</li>
        <li>{transmission}</li>
        <li>{engine}</li>
        {details.kitchen > 0 && <li>Kitchen</li>}
        <li>{details.beds} beds</li>
        {details.airConditioner > 0 && <li>AC</li>}
      </ul>
      <button>Show more</button>
    </div>
  );
};

export default CarItem;
