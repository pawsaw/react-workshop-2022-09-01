import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './Book';
import { addBooks, selectBookByIsbn } from './store';

export interface UseBookResult {
  book: Book | null;
}

export const useBook = (isbn: string): UseBookResult => {
  const book = useSelector(selectBookByIsbn(isbn));
  const dispatch = useDispatch();

  const fetchBook = useCallback(
    async (isbn: string) => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const _book = await response.json();
      dispatch(addBooks([_book]));
    },
    [dispatch],
  );

  useEffect(() => {
    if (book === null) {
      fetchBook(isbn);
    }
  }, [isbn, book, fetchBook]);

  return {
    book,
  };
};
