import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // const handleClickPlus = () => {
  //   setCount(count+1);
  // }

  // const handleClickMinus = () => {
  //   setCount(count-1);
  // }

  const handleClickBtn = (event) => {
    //  console.log(event);
    //  console.log(event.target);
    //  console.dir(event.target);
    const className = event.target.className;

    if (className.includes("plus")) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="Counter">
      <button className="plus btn" onClick={handleClickBtn}>
        +
      </button>
      <div className="count">{count}</div>
      <button className="minus btn" onClick={handleClickBtn}>
        -
      </button>
    </div>
  );
}

export default Counter;
