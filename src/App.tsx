import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";
import { BookListItem } from "./components/BookListItem";

import { exampleBooks } from "./domain/book/exampleBooks";
import { Book } from "./domain/book";

const bookMapping = (book: Book) => {
  return <BookListItem key={book.isbn} book={book} />;
};

const App = () => {
  return (
    <div className="App">
      <AppHeader title="My Book Shop" />
      <MyOldFashionedComponent />
      <p>{myString}</p>
      {exampleBooks.map(bookMapping)}
      {/* {[
        <BookListItem book={exampleBooks[0]} />,
        <BookListItem book={exampleBooks[1]} />,
        <BookListItem book={exampleBooks[2]} />,
        <BookListItem book={exampleBooks[3]} />,
      ]} */}
    </div>
  );
};

export default App;
