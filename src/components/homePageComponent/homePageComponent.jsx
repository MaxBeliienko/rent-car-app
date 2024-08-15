import { NavLink } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div>
      <h1>Rent a camper with us.</h1>
      <h2>We are fast! We are safe! We have quality!</h2>
      <NavLink to="/catalog">Choose a camper</NavLink>
    </div>
  );
};

export default HomePageComponent;
