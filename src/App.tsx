import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";
import { BookListItem } from "./components/BookListItem";

import { exampleBooks } from "./domain/book/exampleBooks";
import { Book } from "./domain/book";
import { BookList } from "./components/BookList";
import { useState } from "react";

// const bookMapping = (book: Book) => {
//   return <BookListItem key={book.isbn} book={book} />;
// };

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  console.log("render", { count });

  const handleClick = () => {
    setCount(count + 1);

    console.log("Clicked", { count });
  };

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <div>{count}</div>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Counter />
      <AppHeader title="My Book Shop" />
      <MyOldFashionedComponent />
      <p>{myString}</p>
      {/* {exampleBooks.map(bookMapping)} */}
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
