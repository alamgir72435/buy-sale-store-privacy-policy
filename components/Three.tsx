import React from "react";
import { useCounter } from "../lib/CounterContext";

const Three = () => {
  const { dispatch } = useCounter();

  return (
    <div>
      <div>
        <button onClick={(_) => dispatch("increment")}>+</button>
        <button onClick={(_) => dispatch("decrement")}>-</button>
      </div>
    </div>
  );
};

export default Three;
