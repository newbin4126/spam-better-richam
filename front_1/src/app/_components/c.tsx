import React, { useState } from "react";

export default function C() {
  const [count, setCount] = useState(0);

  return (
    <div className="c">
      <span className="number">{count}</span>
      <button className="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
