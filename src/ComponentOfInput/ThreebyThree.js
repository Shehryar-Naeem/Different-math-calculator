import React, { useState } from "react";

const ThreeByThree = () => {
  const [matrixVal,setMatrixVal]= useState({
    c11:"",
    c12:"",
    c13:"",
    c21:"",
    c22:"",
    c23:"",
    c31:"",
    c32:"",
    c33:"",
  })
  const [finalVal,setFinalVal]=useState({})
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
    setFinalVal(matrixVal)
  }
  return (
    <>
    <div className="input_grid_three">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
          <input type="number" name="c11" value={matrixVal.c11} onChange={inputEventHandler}/>
          <input type="number" name="c12" value={matrixVal.c12} onChange={inputEventHandler}/>
          <input type="number" name="c13" value={matrixVal.c13} onChange={inputEventHandler}/>
          <input type="number" name="c21" value={matrixVal.c21} onChange={inputEventHandler}/>
          <input type="number" name="c22" value={matrixVal.c22} onChange={inputEventHandler}/>
          <input type="number" name="c23" value={matrixVal.c23} onChange={inputEventHandler}/>
          <input type="number" name="c31" value={matrixVal.c31} onChange={inputEventHandler}/>
          <input type="number" name="c32" value={matrixVal.c32} onChange={inputEventHandler}/>
          <input type="number" name="c33" value={matrixVal.c33} onChange={inputEventHandler}/>
        </div>

        <div className="btn">
          <button type="submit"><i></i><span>solution</span></button>
        </div>
      </form>
      <math xmlns = "http://www.w3.org/1998/Math/MathML">
   <mrow>
      <mo>[</mo>
      <mtable>
         <mtr>
            <mtd><mn>1</mn></mtd>
            <mtd><mn>0</mn></mtd>
            <mtd><mn>0</mn></mtd>
         </mtr>
         
         <mtr>
            <mtd><mn>0</mn></mtd>
            <mtd><mn>1</mn></mtd>
            <mtd><mn>0</mn></mtd>
         </mtr>
         
         <mtr>
            <mtd><mn>0</mn></mtd>
            <mtd><mn>0</mn></mtd>
            <mtd><mn>1</mn></mtd>
         </mtr>
      </mtable>
      <mo>]</mo>
   </mrow>
</math> 
      <p>{finalVal.c11}</p>
      <p>{finalVal.c12}</p>

      <p>{finalVal.c21}</p>

      <p>{finalVal.c22}</p>
    </div>
    </>
  );
};

export default ThreeByThree;
