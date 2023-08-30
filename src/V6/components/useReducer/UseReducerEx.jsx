import React, { useState, useReducer } from "react";

export const UseReducerEx = () => {
  // its hook its take two arguments
  //1. callbackFunc/ reducer fun
  // 2. initial state

  // what it returns
  //1.value
  //2.setter fn/dispatch fun
  // this will be called every dispatch call you make

  // usecase
  // 1. when you next state dependent on prev state then it a go to method

  const cb = (prev, action) => {
    console.log("initialValue", prev);
    console.log("action", action);
    if (action == "inc") {
      return prev + 1;
    }
    if (action == "dec") {
      return prev - 1;
    }
  };

  const [number, dispatchNumber] = useReducer(cb, 100);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Use Reducer Ex</div>
      <p>counter: {count} </p>
      <button onClick={() => setCount(count + 1)}>+count</button>
      <button onClick={() => setCount(count - 1)}>-count</button>
      <p>Number: {number}</p>
      <button onClick={() => dispatchNumber("inc")}>+Number</button>
      <button onClick={() => dispatchNumber("dec")}>-Number</button>

      <section></section>
    </>
  );
};
