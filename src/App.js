import { useEffect, useReducer, useState } from "react";

//state is to access the initial values from the useReducer function
//action is to access the type and payload

const firstReducer = (state, action) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: state.count - 1 };
    case "plus":
      return { ...state, count: state.count + 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  PLUS: "plus",
  MINUS: "minus",
  UPDATE_KEY: "updateKey",
};

function App() {
  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });

  return (
    <div className="App">
      <h1>{state.key}</h1>

      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value });
        }}
      />

      <br />

      <button
        onClick={(e) => {
          dispatch({ type: ACTION.MINUS });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={(e) => {
          dispatch({ type: ACTION.PLUS });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
