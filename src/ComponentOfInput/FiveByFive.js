import React, { useState } from "react";

const FiveByFive = () => {
  const [matrixVal,setMatrixVal]=useState({
    c11:"",
    c12:"",
    c13:"",
    c14:"",
    c15:"",
    c21:"",
    c22:"",
    c23:"",
    c24:"",
    c25:"",
    c31:"",
    c32:"",
    c33:"",
    c34:"",
    c35:"",
    c41:"",
    c42:"",
    c43:"",
    c44:"",
    c45:"",
    c51:"",
    c52:"",
    c53:"",
    c54:"",
    c55:"",
  })
  const [val,setVal]=useState({})
  const submitHandler=(e)=>{
    e.preventDefault();
    setVal(matrixVal)
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
  return (
    <div className="input_grid_five">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
          <input type="number" name="c11" value={matrixVal.c11} onChange={inputEventHandler}/>
          <input type="number" name="c12" value={matrixVal.c12} onChange={inputEventHandler}/>
          <input type="number" name="c13" value={matrixVal.c13} onChange={inputEventHandler}/>
          <input type="number" name="c14" value={matrixVal.c14} onChange={inputEventHandler}/>
          <input type="number" name="c15" value={matrixVal.c15} onChange={inputEventHandler}/>
          <input type="number" name="c21" value={matrixVal.c21} onChange={inputEventHandler}/>
          <input type="number" name="c22" value={matrixVal.c22} onChange={inputEventHandler}/>
          <input type="number" name="c23" value={matrixVal.c23} onChange={inputEventHandler}/>
          <input type="number" name="c24" value={matrixVal.c24} onChange={inputEventHandler}/>
          <input type="number" name="c25" value={matrixVal.c25} onChange={inputEventHandler}/>
          <input type="number" name="c31" value={matrixVal.c31} onChange={inputEventHandler}/>
          <input type="number" name="c32" value={matrixVal.c32} onChange={inputEventHandler}/>
          <input type="number" name="c33" value={matrixVal.c33} onChange={inputEventHandler}/>
          <input type="number" name="c34" value={matrixVal.c34} onChange={inputEventHandler}/>
          <input type="number" name="c35" value={matrixVal.c35} onChange={inputEventHandler}/>
          <input type="number" name="c41" value={matrixVal.c41} onChange={inputEventHandler}/>
          <input type="number" name="c42" value={matrixVal.c42} onChange={inputEventHandler}/>
          <input type="number" name="c43" value={matrixVal.c43} onChange={inputEventHandler}/>
          <input type="number" name="c44" value={matrixVal.c44} onChange={inputEventHandler}/>
          <input type="number" name="c45" value={matrixVal.c45} onChange={inputEventHandler}/>
          <input type="number" name="c51" value={matrixVal.c51} onChange={inputEventHandler}/>
          <input type="number" name="c52" value={matrixVal.c52} onChange={inputEventHandler}/>
          <input type="number" name="c53" value={matrixVal.c53} onChange={inputEventHandler}/>
          <input type="number" name="c54" value={matrixVal.c54} onChange={inputEventHandler}/>
          <input type="number" name="c55" value={matrixVal.c55} onChange={inputEventHandler}/>
        </div>
        <div className="btn">
          <button type="submit"><i></i><span>solution</span> </button>
        </div>
      </form>
      <p>{val.c11}</p>
<p>{val.c12}</p>
<p>{val.c13}</p>
<p>{val.c14}</p>
<p>{val.c15}</p>
<p>{val.c21}</p>
<p>{val.c22}</p>
<p>{val.c23}</p>
<p>{val.c24}</p>
<p>{val.c25}</p>
<p>{val.c31}</p>
<p>{val.c32}</p>
<p>{val.c33}</p>
<p>{val.c34}</p>
<p>{val.c35}</p>
<p>{val.c41}</p>
<p>{val.c42}</p>
<p>{val.c43}</p>
<p>{val.c44}</p>
<p>{val.c45}</p>
<p>{val.c51}</p>
<p>{val.c52}</p>
<p>{val.c53}</p>
<p>{val.c54}</p>
<p>{val.c55}</p>
    </div>
  );
};

export default FiveByFive;
