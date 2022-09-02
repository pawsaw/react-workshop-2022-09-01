import React from 'react';
import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <h4>
        {book.isbn}: {book.title}
      </h4>
    </div>
  );
};
