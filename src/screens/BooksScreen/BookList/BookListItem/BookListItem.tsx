import React from 'react';
import { Book } from '../../../../domain/books';
import { useCounter } from '../../../../domain/counter';
import { useTheme } from '../../../../domain/theme';
import { OnBookSelected } from '../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  const { primaryColor } = useTheme();

  return (
    <div>
      <span
        style={{
          color: primaryColor,
        }}
        onClick={() => onBookSelected(book)}
      >
        {book.title}
      </span>
    </div>
  );
};
