import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const reload = async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const _books = await response.json();
    setBooks(_books);
  };

  useEffect(() => {
    reload();
  }, []);

  return {
    books,
    reload,
  };
};
