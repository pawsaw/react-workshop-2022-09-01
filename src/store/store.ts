import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '../domain/books/store';
import { counterReducer } from '../domain/counter/store';

export const rootReducer = combineReducers({
  books: booksReducer,
  counter: counterReducer,
});

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
