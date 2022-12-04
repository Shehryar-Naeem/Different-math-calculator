import React,{useState} from "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";

const TwobyTwo = () => {
  
  const [matrixVal,setMatrixVal]= useState({
    a:"",
    b:"",
    c:"",
    d:"", 
  })

  const inputEventHandler=(event)=>{
    const {name,value}= event.target;

    setMatrixVal((preVal)=>{
      return {
        ...preVal,
        [name]:value
      }
    })
  }

  const submitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <>
    <div className="input_grid_two">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
        <input type="number" name="a" value={matrixVal.a} onChange={inputEventHandler}/>
        <input type="number" name="b" value={matrixVal.b} onChange={inputEventHandler}/>
        <input type="number" name="c" value={matrixVal.c} onChange={inputEventHandler}/>
        <input type="number" name="d" value={matrixVal.d} onChange={inputEventHandler}/>
        </div>
        <div className="btn">
          <button type="submit"><i></i><span>solution</span></button>
        </div>
      </form>

    </div>
      </>
  );
};

export default TwobyTwo;
