import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../../domain/books';
import { BookDetail } from './BookDetail/BookDetail';

export interface BookDetailsScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailsScreenParams>();
  const { book } = useBook(isbn);

  return (
    <div>
      <h2>Book Details</h2>
      {book ? <BookDetail book={book} /> : <span>Loading book...</span>}
    </div>
  );
};
