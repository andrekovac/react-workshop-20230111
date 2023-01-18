import { useReducer } from "react";

type Action = { type: string };

// Action creator
const increment = () => {
  return { type: "increment" };
};

/**
 * Custom hook to use the count state and actions
 */
export const useCount = () => {
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  const incrementCount = () => {
    dispatch(increment());
  };

  return {
    count: state,
    incrementCount,
  };
};

export const CounterWithUseReducer = () => {
  const { count, incrementCount } = useCount();

  return (
    <>
      <button onClick={incrementCount}>Increment</button>
      <h3>{count}</h3>
    </>
  );
};
