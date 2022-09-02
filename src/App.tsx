import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';

import { useBook, useBooks } from './domain/books';

function App() {
  const onBookSelected: OnBookSelected = (book) => {
    alert(book.price);
  };

  const { books, reload } = useBooks();
  const { book } = useBook('9781430246206');

  return (
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
  );
}

export default App;
