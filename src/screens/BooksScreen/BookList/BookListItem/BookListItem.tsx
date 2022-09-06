import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../../../domain/books';
import { useCounter } from '../../../../domain/counter';
import { useTheme } from '../../../../domain/theme';
import { OnBookSelected } from '../../OnBookSelected';

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
      >
        {book.title} -{' '}
        <span
          style={{
            color: 'blue',
            textDecoration: 'underline',
          }}
          onClick={() => onBookSelected(book)}
        >
          details
        </span>
      </span>
    </div>
  );
};
