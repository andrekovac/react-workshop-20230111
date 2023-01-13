import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";
import { BookListItem } from "./components/BookListItem";

import { exampleBooks } from "./domain/book/exampleBooks";
import { Book } from "./domain/book";
import { BookList } from "./components/BookList";

// const bookMapping = (book: Book) => {
//   return <BookListItem key={book.isbn} book={book} />;
// };

const App = () => {
  return (
    <div className="App">
      <AppHeader title="My Book Shop" />
      <MyOldFashionedComponent />
      <p>{myString}</p>
      {/* {exampleBooks.map(bookMapping)} */}
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
