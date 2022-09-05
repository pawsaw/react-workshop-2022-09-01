import { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import { CounterProvider } from './domain/counter';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
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
        <nav>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books" component={BooksScreen} />
          <Route path="/playground" component={PlaygroundScreen} />
          <Redirect to="/books" />
        </Switch>
      </div>
    </CounterProvider>
  );
}

export default App;
