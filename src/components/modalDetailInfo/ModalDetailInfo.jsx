import sprite from '../../img/sprite.svg';

const ModalDetailInfo = ({ car }) => {
  if (!car) {
    return <p>Loading...</p>;
  }

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
      <h2>{name}</h2>
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
      <p>&#8364;{price}</p>
      <ul>
        {gallery.map((photo, index) => {
          return (
            <li key={index}>
              <img src={photo} alt="Camper photo" />
            </li>
          );
        })}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default ModalDetailInfo;
