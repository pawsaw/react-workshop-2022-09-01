import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../Book';

export interface BooksState {
  books: Book[] | null;
}

export const initialBooksState: BooksState = {
  books: null,
};

export type SetBooksAction = PayloadAction<Book[]>;
export type AddBooksAction = PayloadAction<Book[]>;

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    setBooks: (state: BooksState, action: SetBooksAction): BooksState => {
      return {
        ...state,
        books: [...action.payload],
      };
    },
    addBooks: (state: BooksState, action: AddBooksAction): BooksState => {
      return {
        ...state,
        books: [...(state.books ?? []), ...action.payload],
      };
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { setBooks, addBooks } = booksSlice.actions;
