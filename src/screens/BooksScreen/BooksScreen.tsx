import React, { useCallback } from 'react';
import { useBooks } from '../../domain/books';
import { OnBookSelected, BookList } from './BookList';

export const BooksScreen: React.FC = () => {
  const onBookSelected: OnBookSelected = useCallback((book) => {
    alert(book.price);
  }, []);

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
