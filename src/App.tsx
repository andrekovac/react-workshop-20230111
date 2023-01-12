import "./App.css";
import { MyOldFashionedComponent } from "./components/OldFashionedComponent";
import { AppHeader, myString } from "./components/AppHeader";
import { ExampleBook } from "./components/ExampleBook";

const App = () => {
  return (
    <div className="App">
      <AppHeader title="My Book Shop" />
      <MyOldFashionedComponent />
      <p>{myString}</p>
      <ExampleBook />
    </div>
  );
};

export default App;
