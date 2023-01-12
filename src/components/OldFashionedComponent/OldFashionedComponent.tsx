import React from "react";

export const MyOldFashionedComponent = () => {
  return (
    <div>
      {React.createElement(
        "div",
        { className: "App" },
        React.createElement("p", null, "Hello World")
      )}
    </div>
  );
};
