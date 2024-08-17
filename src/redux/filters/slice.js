import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const isEquipmentSelected = state.equipment.includes(action.payload);
      console.log(action.payload);
      console.log(state.equipment);
      if (isEquipmentSelected) {
        state.equipment = state.equipment.filter(
          item => item !== action.payload
        );
      } else {
        state.equipment.push(action.payload);
      }
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    resetFilters: state => {
      state.location = '';
      state.equipment = [];
      state.vehicleType = '';
    },
  },
});

export const { setLocation, toggleEquipment, setVehicleType, resetFilters } =
  filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
