import { React, useState } from 'react'
 
 function Counter() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
 
  return (
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn2" >{counter}</button>
        <button className="control__btn1" onClick={increase}>+</button>
       
      </div>
  );
}

export {Counter};