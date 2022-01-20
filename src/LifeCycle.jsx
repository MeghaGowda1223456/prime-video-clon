import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    console.log("shashi");
    document.title = state;
  },[state]);
  let handleClick = e => {
    setState(prevState => prevState + 1);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default LifeCycle;
