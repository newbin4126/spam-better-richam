import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
    </div>
  );
}
