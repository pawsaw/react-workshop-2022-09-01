import './App.css';
import { BookList, OnBookSelected } from './components/BookList';
import { books } from './data/books';

function App() {
  const onBookSelected: OnBookSelected = (book) => {
    alert(book.price);
  };

  return (
    <div>
      <h1>Book Manager</h1>
      <BookList books={books} onBookSelected={onBookSelected} />
    </div>
  );
}

export default App;
