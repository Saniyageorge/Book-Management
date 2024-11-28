import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Pages/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;