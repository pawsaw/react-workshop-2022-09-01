import { Book } from '../Book';

export interface BooksState {
  books: Book[];
}

export const initialBooksState: BooksState = {
  books: [],
};

export const booksReducer = (
  state: BooksState = initialBooksState,
  action: unknown,
): BooksState => {
  return state;
};
