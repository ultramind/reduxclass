import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByNumber } from "../redux/counter";
// import reduc store.

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Redux</h1>
        <h1>THE COUNT IS: {count}</h1>
      </div>
      <div className="card">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(incrementByNumber(100))}
        >
          Increment by 10
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
