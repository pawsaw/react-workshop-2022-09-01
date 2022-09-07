import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './Book';
import { loadBook, selectBookByIsbn } from './store';

export interface UseBookResult {
  book: Book | null;
}

export const useBook = (isbn: string): UseBookResult => {
  const book = useSelector(selectBookByIsbn(isbn));
  const dispatch = useDispatch();

  // @ts-ignore
  const fetchBook = useCallback((isbn) => dispatch(loadBook(isbn)), [dispatch]);

  useEffect(() => {
    if (book === null) {
      fetchBook(isbn);
    }
  }, [isbn, book, fetchBook]);

  return {
    book,
  };
};
