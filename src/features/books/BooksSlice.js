import { createSlice } from '@reduxjs/toolkit';
const { v4: uuidv4 } = require('uuid');

const initialBooks = {
  books: [
    { id: uuidv4(), title: 'Loving Bangladesh', author: 'alim mondal' },
    { id: uuidv4(), title: 'History of Bangladesh', author: 'alim mondal' },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
