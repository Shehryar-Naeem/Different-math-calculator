import React,{useState} from "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";

const TwobyTwo = () => {
  const [matrixVal,setMatrixVal]= useState({
    c11:"",
    c12:"",
    c21:"",
    c22:""
  })
  const [initVal,setInitVal]= useState({
    c11:"c11",
    c12:"c12",
    c21:"c21",
    c22:"c22"
  })
  const [Val,setVal]= useState({})

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
    e.preventDefault()
    setVal(matrixVal)
    setInitVal(matrixVal)

  }
  return (
    <>
    <div className="input_grid_two">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
        <input type="number" name="c11" value={matrixVal.c11} onChange={inputEventHandler}/>
        <input type="number" name="c12" value={matrixVal.c12} onChange={inputEventHandler}/>
        <input type="number" name="c21" value={matrixVal.c21} onChange={inputEventHandler}/>
        <input type="number" name="c22" value={matrixVal.c22} onChange={inputEventHandler}/>
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
