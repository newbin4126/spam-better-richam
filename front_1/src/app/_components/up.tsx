import React, { useState } from "react";

export default function Up() {
  const [count, setCount] = useState(0);

  return (
    <div className="up">
      <span className="number">{count}</span>{" "}
      <button className="button" onClick={() => setCount(count + 1)}>
        Add +
      </button>
    </div>
  );
}
