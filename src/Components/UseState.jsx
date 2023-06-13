import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>
          <BiPlusMedical className="icon" />
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
          <FaMinus className="icon minus_icon" />
        </button>
      </div>
    </>
  );
};

export default UseState;
