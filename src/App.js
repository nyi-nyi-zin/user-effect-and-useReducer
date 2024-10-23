import { useEffect, useState } from "react";

function App() {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <div className="App">
      <h1>{key}</h1>
      <input
        type="text"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
