import { useCallback, useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';

import { useBook, useBooks } from './domain/books';
import { CounterProvider } from './domain/counter';

function App() {
  const onBookSelected: OnBookSelected = useCallback((book) => {
    alert(book.price);
  }, []);

  const { books, reload } = useBooks();
  const { book } = useBook('9781430246206');

  const [count, setCount] = useState(0);

  return (
    <CounterProvider
      counter={{
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
      }}
    >
      <div>
        <h1>Book Manager</h1>
        {book ? <BookDetail book={book} /> : <span>Loading book...</span>}
        <button onClick={reload}>Reload books</button>
        {books ? (
          <BookList books={books} onBookSelected={onBookSelected} />
        ) : (
          <span>Loading books...</span>
        )}
      </div>
    </CounterProvider>
  );
}

export default App;
