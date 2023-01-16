import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

import { BookList } from "./components/BookList";
import { useState } from "react";
import { useBooks } from "./domain/book/hooks";

// const bookMapping = (book: Book) => {
//   return <BookListItem key={book.isbn} book={book} />;
// };

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <div>{count}</div>
    </>
  );
};

const useCount = (): [boolean, () => void] => {
  const [showCounter, setShowCounter] = useState(true);

  const increment = () => {
    setShowCounter(!showCounter);
  };

  return [showCounter, increment];
};

const App = () => {
  const { books } = useBooks();
  const [showCounter, increment] = useCount();

  return (
    <div className="App">
      <div>
        <button onClick={increment}>Show/Hide counter</button>
      </div>
      {showCounter && <Counter />}
      <AppHeader title="My Book Shop" />
      <MyOldFashionedComponent />
      <p>{myString}</p>
      {/* {exampleBooks.map(bookMapping)} */}
      <BookList books={books} />
    </div>
  );
};

export default App;
