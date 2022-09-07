import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks, selectAllBooks } from '../../domain/books/store';
import { BookList } from './BookList';
import { OnBookSelected } from './OnBookSelected';

export interface BooksScreenProps {
  onBookSelected: OnBookSelected;
}

export const BooksScreen: React.FC<BooksScreenProps> = ({ onBookSelected }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(loadBooks());
  }, [dispatch]);
  const books = useSelector(selectAllBooks);

  return (
    <div>
      <h2>Books</h2>
      {books ? (
        <BookList books={books} onBookSelected={onBookSelected} />
      ) : (
        <span>Loading books...</span>
      )}
    </div>
  );
};
