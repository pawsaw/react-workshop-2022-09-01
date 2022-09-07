import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { Book } from './Book';
import { loadBook, selectBookByIsbn } from './store';

export interface UseBookResult {
  book: Book | null;
}

export const useBook = (isbn: string): UseBookResult => {
  const book = useSelector(selectBookByIsbn(isbn));
  const dispatch = useDispatch<typeof store.dispatch>();

  const fetchBook = useCallback((isbn: string) => dispatch(loadBook(isbn)), [dispatch]);

  useEffect(() => {
    if (book === null) {
      fetchBook(isbn);
    }
  }, [isbn, book, fetchBook]);

  return {
    book,
  };
};
