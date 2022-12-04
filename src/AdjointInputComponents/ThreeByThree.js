import React, { useState } from "react";


const ThreeByThree = () => {
  const [matrixVal,setMatrixVal]= useState({
    a:"",
    b:"",
    c:"",
    d:"", 
    e:"",
    f:"",
    g:"",
    h:"",
    i:"",
  })
  const inputEventHandler=(e)=>{
    const {name,value}= e.target;
    setMatrixVal(preVal=>{
      return {
        ...preVal,
        [name]:value
      }
    })
  }

 
  const submitHandler=(e)=>{
    e.preventDefault();
 
  }
  return (
    <>
    <div className="input_grid_three">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
          <input type="number" name="a" value={matrixVal.a} onChange={inputEventHandler}/>
          <input type="number" name="b" value={matrixVal.b} onChange={inputEventHandler}/>
          <input type="number" name="c" value={matrixVal.c} onChange={inputEventHandler}/>
          <input type="number" name="d" value={matrixVal.d} onChange={inputEventHandler}/>
          <input type="number" name="e" value={matrixVal.e} onChange={inputEventHandler}/>
          <input type="number" name="f" value={matrixVal.f} onChange={inputEventHandler}/>
          <input type="number" name="g" value={matrixVal.g} onChange={inputEventHandler}/>
          <input type="number" name="h" value={matrixVal.h} onChange={inputEventHandler}/>
          <input type="number" name="i" value={matrixVal.i} onChange={inputEventHandler}/>
        </div>

        <div className="btn">
          <button type="submit"><i></i><span>solution</span></button>
        </div>
      </form>
   
    </div>
    </>
  );
};

export default ThreeByThree;
