import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../Book';

export interface BooksState {
  books: Book[] | null;
}

export const initialBooksState: BooksState = {
  books: null,
};

export type SetBooksAction = PayloadAction<Book[]>;
export type AddBooksAction = PayloadAction<Book[]>;

export const loadBooks = createAsyncThunk<Book[]>('loadBooks', async () => {
  const response = await fetch(`http://localhost:4730/books`);
  const _books = await response.json();
  return _books;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    setBooks: (state: BooksState, action: SetBooksAction) => {
      state.books = action.payload;
    },
    addBooks: (state: BooksState, action: AddBooksAction) => {
      state.books?.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(loadBooks.pending, (state: BooksState, action) => {
        return {
          ...state,
          books: null,
        };
      })
      .addCase(loadBooks.rejected, (state: BooksState) => {
        return {
          ...state,
          books: null,
        };
      })
      .addCase(loadBooks.fulfilled, (state: BooksState, action) => {
        return {
          ...state,
          books: action.payload,
        };
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const { setBooks, addBooks } = booksSlice.actions;
