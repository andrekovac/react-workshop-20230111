import React from "react";
import "./App.css";
import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <MyOldFashionedComponent />
      <p>{myString}</p>
    </div>
  );
};

export default App;
