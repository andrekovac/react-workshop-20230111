import "./App.css";

import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

import { useEffect, useRef, useState } from "react";
import { Theme, ThemeContext } from "./domain/theme";
import { ThemeEditor } from "./components/ThemeEditor";
import { Outlet } from "react-router-dom";
import { Counter } from "./components/Counter";

const useCount = (): [boolean, () => void] => {
  const [showCounter, setShowCounter] = useState(true);

  const increment = () => {
    setShowCounter(!showCounter);
  };

  return [showCounter, increment];
};

const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(inputRef.current!.value);
      }}
    >
      <input type="text" placeholder="Title" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [showCounter, increment] = useCount();

  const meinDiv = useRef<HTMLDivElement>(null);
  // const meineZahl = useRef<number>(0);
  // const [myNumber, setMyNumber] = useState(0);

  useEffect(() => {
    console.log("referenz des div elements", meinDiv.current?.innerHTML);

    // meineZahl.current++;
    // setMyNumber(myNumber + 1);
  }, []);

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

        <div ref={meinDiv}>Das ist ein neues Element</div>

        <div
          style={{
            border: "3px solid black",
            padding: "10px",
          }}
        >
          <UncontrolledForm />
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
