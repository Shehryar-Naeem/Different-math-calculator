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
  const [finalVal,setFinalVal]=useState("")
  const inpTag= document.querySelectorAll(".inp")
  for(let i=0;i<inpTag.length;i++){
    inpTag[i].addEventListener("keyup",function(e){
      if (e.keyCode === 39) {
        e.preventDefault();
        if (this.nextElementSibling===inpTag[i+1]) {
            this.nextElementSibling.focus();
        }
    }
    })
  }
  const inputEventHandler=(e)=>{
    const {name,value}= e.target;
    setMatrixVal(preVal=>{
      return {
        ...preVal,
        [name]:value
      }
    })
  }

  const determinantResult=()=>{
    let op1,op2,op3,op4,op5,op6;
    op1 = Number(matrixVal.a) * Number(matrixVal.e) * Number(matrixVal.i)
    op2 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.f)
    op3 = Number(matrixVal.b) * Number(matrixVal.d) * Number(matrixVal.i)
    op4 = Number(matrixVal.b) * Number(matrixVal.g) * Number(matrixVal.f);
    op5 = Number(matrixVal.c) * Number(matrixVal.d) * Number(matrixVal.h)
    op6 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.e)
    
    const result = op1 - op2 - op3 + op4 + op5 - op6;

    return result
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const determinant = determinantResult
    setFinalVal(determinant)
  }
  return (
    <>
    <div className="input_grid_three">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
          <input type="number" className="inp" name="a" value={matrixVal.a} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="b" value={matrixVal.b} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="c" value={matrixVal.c} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="d" value={matrixVal.d} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="e" value={matrixVal.e} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="f" value={matrixVal.f} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="g" value={matrixVal.g} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="h" value={matrixVal.h} onChange={inputEventHandler}/>
          <input type="number" className="inp" name="i" value={matrixVal.i} onChange={inputEventHandler}/>
        </div>

        <div className="btn">
          <button type="submit"><i></i><span>solution</span></button>
        </div>
      </form>
      <p>{finalVal}</p>
    </div>
    </>
  );
};

export default ThreeByThree;
