import React, { useState, useEffect } from "react";
// step 1 / import useState and useEffect

function UseEffect() {
  // step 3 / useState use to stateful value
  const [count, setCount] = useState(0);

  //  use useEffect. The function passed to useEffect will run after the render is committed to the screen.
  useEffect(() => {
    alert(`You clicked ${count} times`);
  });

  // step 4 / Increse count number click
  const handleUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Step 2 / HTML tags */}
      <div>You have clicked {count} times</div>
      <button onClick={handleUpdate}>Click me</button>
    </div>
  );
}

export default UseEffect;
