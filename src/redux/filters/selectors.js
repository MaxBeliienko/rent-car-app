import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from '../cars/selectors';

export const selectFilteredCars = createSelector(
  [selectCars, state => state.filters],
  (cars, filters) => {
    return cars.filter(car => {
      const matchesLocation = car.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

      // Фільтрація за обладнанням
      const matchesEquipment = filters.equipment.every(
        equipment => car.details[equipment.toLowerCase()]
      );
      const matchesVehicleType =
        filters.vehicleType === '' ||
        car.form.toLowerCase() === filters.vehicleType.toLowerCase();

      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
  }
);
