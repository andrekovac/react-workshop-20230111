import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

import { BookList } from "./components/BookList";
import { useState } from "react";
import { useBooks } from "./domain/book/hooks";
import { Theme, ThemeContext } from "./domain/theme";
import { ThemeEditor } from "./components/ThemeEditor";

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

  const [primaryColor, setPrimaryColor] = useState("tomato");
  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ThemeEditor />
        <div>
          <button onClick={increment}>Show/Hide counter</button>
        </div>
        {showCounter && <Counter />}
        <AppHeader title="My Book Shop" />
        <MyOldFashionedComponent />
        <p>{myString}</p>
        <BookList books={books} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
