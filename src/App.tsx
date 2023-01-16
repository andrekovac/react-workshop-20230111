import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

import { useState } from "react";
import { Theme, ThemeContext } from "./domain/theme";
import { ThemeEditor } from "./components/ThemeEditor";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
