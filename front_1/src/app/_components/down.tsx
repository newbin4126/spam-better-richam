import React, { useState } from "react";

export default function Down() {
  const [count, setCount] = useState(0);

  return (
    <div className="down">
      <span className="number">{count}</span>{" "}
      <button className="button" onClick={() => setCount(count - 1)}>
        Add +
      </button>
    </div>
  );
}
