import React, { useState } from "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";

const TwobyTwo = () => {
  const [matrixVal, setMatrixVal] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    const inpTag= document.querySelectorAll(".inp")
    for(let i=0;i<inpTag.length;i++){
      inpTag[i].addEventListener("keyup",function(e){
        console.log(e);
        if (e.keyCode === 39) {
          e.preventDefault();
          if (this.nextElementSibling===inpTag[i+1]) {
              this.nextElementSibling.focus();
          }
      }else if(e.keyCode===37){
        e.preventDefault();
        if(this.previousElementSibling===inpTag[i-1]){
          this.previousElementSibling.focus();
        }
      }
      })
    }
    setMatrixVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const [finalResult, setFinanlResult] = useState({
    rc11: "",
    rc12: "",
    rc21: "",
    rc22: "",
  });
  const C11 = () => {
    let m11, result;
    m11 = Number(matrixVal.d);
    result = Math.pow(-1, 1 + 1) * m11;
    return result;
  };
  const C12 = () => {
    let m12, result;
    m12 = Number(matrixVal.c);
    result = Math.pow(-1, 1 + 2) * m12;
    return result;
  };
  const C21 = () => {
    let m21, result;
    m21 = Number(matrixVal.b);
    result = Math.pow(-1, 2 + 1) * m21;
    return result;
  };
  const C22 = () => {
    let m22, result;
    m22 = Number(matrixVal.a);
    result = Math.pow(-1, 2 + 2) * m22;
    return result;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const adjoint11 = C11();
    const adjoint12 = C12();
    const adjoint21 = C21();
    const adjoint22 = C22();
    setFinanlResult((preVal) => ({
      ...preVal,
      rc11: adjoint11,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc12: adjoint12,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc21: adjoint21,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc22: adjoint22,
    }));
  };
  return (
    <>
      <div className="input_grid_two">
        <form onSubmit={submitHandler}>
          <div className="input_grid">
            <input
              type="number"
              name="a"
              value={matrixVal.a}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="b"
              value={matrixVal.b}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="c"
              value={matrixVal.c}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="d"
              value={matrixVal.d}
              className="inp"
              onChange={inputEventHandler}
            />
          </div>
          <div className="btn">
            <button type="submit">
              <i></i>
              <span>solution</span>
            </button>
          </div>
        </form>
        <h1>{finalResult.rc11}</h1>
        <h1>{finalResult.rc12}</h1>
        <h1>{finalResult.rc21}</h1>
        <h1>{finalResult.rc22}</h1>
      </div>
    </>
  );
};

export default TwobyTwo;
