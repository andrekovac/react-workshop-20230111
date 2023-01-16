import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

import { Book } from "./domain/book";
import { BookList } from "./components/BookList";
import { useEffect, useState } from "react";
import { fetchBooks } from "./domain/book/api";

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

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Possibility 1: local async function that gets immediately called
    async function fetchData() {
      try {
        const books = await fetchBooks();
        if (books) {
          setBooks(books);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    // // Possibility 2: respond to promise resolution with .then handler
    // fetchBooks()
    //   .then((books) => {
    //     if (books) {
    //       setBooks(books);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return books;
};

const useCount = (): [boolean, () => void] => {
  const [showCounter, setShowCounter] = useState(true);

  const increment = () => {
    setShowCounter(!showCounter);
  };

  return [showCounter, increment];
};

const App = () => {
  const books = useBooks();
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
