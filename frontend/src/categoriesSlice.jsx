// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  electronics: [], // Assume this is populated with your electronics data
  visibleCards: {
    electronics: 10, // Initial number of visible cards
  },
  totalCards: {
    electronics: 0, // Total number of cards (to be set based on data)
  },
  currentPosition: {
    electronics: 0,
  },
  showMoreClicked: {
    electronics: false,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setVisibleCards: (state, action) => {
      const { category, value } = action.payload;
      state.visibleCards[category] = value;
    },
    setCurrentPosition: (state, action) => {
      const { category, value } = action.payload;
      state.currentPosition[category] = value;
    },
    setShowMoreClicked: (state, action) => {
      const { category, value } = action.payload;
      state.showMoreClicked[category] = value;
    },
    setElectronics: (state, action) => {
      state.electronics = action.payload;
      state.totalCards.electronics = action.payload.length;
    },
  },
});

export const { 
  setVisibleCards, 
  setCurrentPosition, 
  setShowMoreClicked, 
  setElectronics 
} = categoriesSlice.actions;

export default categoriesSlice.reducer;