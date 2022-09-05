import React from 'react';
import { Book } from '../../domain/books';
import { useCounter } from '../../domain/counter';
import { noop } from '../../utils/noop';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  const { count, increment } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment counter: {count}</button>
      {books.map((book) => (
        <BookListItem book={book} key={book.title} onBookSelected={onBookSelected} />
      ))}
    </div>
  );
};
