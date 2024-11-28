import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], // Array of book objects { id, title, author, description }
};

const booksSlice = createSlice({
  name: 'books',
  initialState:[],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    editBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index >= 0) state.books[index] = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;