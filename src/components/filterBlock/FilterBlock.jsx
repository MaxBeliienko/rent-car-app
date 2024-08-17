import styles from './FilterBlock.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLocation,
  toggleEquipment,
  setVehicleType,
} from '../../redux/filters/slice';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const handleLocationChange = e => {
    dispatch(setLocation(e.target.value));
  };

  const handleEquipmentChange = e => {
    dispatch(toggleEquipment(e.target.value));
    console.log(e.target.value);
  };

  const handleVehicleTypeChange = e => {
    dispatch(setVehicleType(e.target.value));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.location}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={filters.location}
          onChange={handleLocationChange}
          placeholder="Kyiv, Ukraine"
        />
      </div>

      <div className={styles['filter-group']}>
        <h4>Vehicle equipment</h4>
        <div className={styles.equipment}>
          <label>
            <input
              type="checkbox"
              value="ac"
              checked={filters.equipment.includes('ac')}
              onChange={handleEquipmentChange}
            />
            AC
          </label>
          <label>
            <input
              type="checkbox"
              value="automatic"
              checked={filters.equipment.includes('automatic')}
              onChange={handleEquipmentChange}
            />
            Automatic
          </label>
          <label>
            <input
              type="checkbox"
              value="kitchen"
              checked={filters.equipment.includes('kitchen')}
              onChange={handleEquipmentChange}
            />
            Kitchen
          </label>
          <label>
            <input
              type="checkbox"
              value="tv"
              checked={filters.equipment.includes('tv')}
              onChange={handleEquipmentChange}
            />
            TV
          </label>
          <label>
            <input
              type="checkbox"
              value="shower/wc"
              checked={filters.equipment.includes('shower/wc')}
              onChange={handleEquipmentChange}
            />
            Shower/WC
          </label>
        </div>
      </div>

      <div className={styles['filter-group']}>
        <h4>Vehicle type</h4>
        <div className={styles['vehicle-type']}>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="panelTruck"
              checked={filters.vehicleType === 'panelTruck'}
              onChange={handleVehicleTypeChange}
            />
            Van
          </label>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="fullyIntegrated"
              checked={filters.vehicleType === 'fullyIntegrated'}
              onChange={handleVehicleTypeChange}
            />
            Fully Integrated
          </label>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="alcove"
              checked={filters.vehicleType === 'alcove'}
              onChange={handleVehicleTypeChange}
            />
            Alcove
          </label>
        </div>
      </div>
      <Button text="Search" variant="show-more" />
      <NavLink to="/favorites" className={styles['nav-to-favorites']}>
        Favorites
      </NavLink>
    </div>
  );
};

export default FilterBlock;
