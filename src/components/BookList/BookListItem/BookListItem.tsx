import React from 'react';
import { Book } from '../../../domain/books';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  return (
    <div>
      <span onClick={() => onBookSelected(book)}>{book.title}</span>
    </div>
  );
};
