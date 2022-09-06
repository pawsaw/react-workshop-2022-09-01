import React from 'react';
import { useBooks } from '../../domain/books';
import { BookList } from './BookList';
import { OnBookSelected } from './OnBookSelected';

export interface BooksScreenProps {
  onBookSelected: OnBookSelected;
}

export const BooksScreen: React.FC<BooksScreenProps> = ({ onBookSelected }) => {
  const { books } = useBooks();

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
