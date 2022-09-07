import { State } from '../../../store';

export const selectAllBooks = (state: State) => state.books.books;
export const selectBookByIsbn = (isbn: string) => {
  return (state: State) => {
    return state.books.books?.find((book) => book.isbn === isbn) ?? null;
  };
};
