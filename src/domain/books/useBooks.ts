import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './Book';
import { selectAllBooks, setBooks } from './store';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const reload = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const _books = await response.json();
    // dispatch
    dispatch(setBooks(_books));
  }, [dispatch]);

  useEffect(() => {
    if (books === null) {
      reload();
    }
  }, [books, reload]);

  return {
    books,
    reload,
  };
};
