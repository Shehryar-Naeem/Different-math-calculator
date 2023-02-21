import React, { useState } from "react";

const ThreeByThree = () => {
  const [matrixVal, setMatrixVal] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
  });
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
  const inputEventHandler = (e) => {
    const { name, value } = e.target;
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
    rc13: "",
    rc21: "",
    rc22: "",
    rc23: "",
    rc31: "",
    rc32: "",
    rc33: "",
  });
  const C11 = () => {
    let op1, op2, m11, result;
    op1 = Number(matrixVal.e) * Number(matrixVal.i);
    op2 = Number(matrixVal.h) * Number(matrixVal.f);
    m11 = op1 - op2;
    result = Math.pow(-1, 1 + 1) * m11;
    return result;
  };
  const C12 = () => {
    let op1, op2, m12, result;
    op1 = Number(matrixVal.d) * Number(matrixVal.i);
    op2 = Number(matrixVal.g) * Number(matrixVal.f);
    m12 = op1 - op2;
    result = Math.pow(-1, 1 + 2) * m12;
    return result;
  };
  const C13 = () => {
    let op1, op2, m13, result;
    op1 = Number(matrixVal.d) * Number(matrixVal.h);
    op2 = Number(matrixVal.g) * Number(matrixVal.e);
    m13 = op1 - op2;
    result = Math.pow(-1, 1 + 3) * m13;
    return result;
  };
  const C21 = () => {
    let op1, op2, m21, result;
    op1 = Number(matrixVal.b) * Number(matrixVal.i);
    op2 = Number(matrixVal.c) * Number(matrixVal.h);
    m21 = op1 - op2;
    result = Math.pow(-1, 2 + 1) * m21;
    return result;
  };
  const C22 = () => {
    let op1, op2, m22, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.i);
    op2 = Number(matrixVal.g) * Number(matrixVal.c);
    m22 = op1 - op2;
    result = Math.pow(-1, 2 + 2) * m22;
    return result;
  };
  const C23 = () => {
    let op1, op2, m23, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.h);
    op2 = Number(matrixVal.g) * Number(matrixVal.b);
    m23 = op1 - op2;
    result = Math.pow(-1, 2 + 3) * m23;
    return result;
  };
  const C31 = () => {
    let op1, op2, m31, result;
    op1 = Number(matrixVal.b) * Number(matrixVal.f);
    op2 = Number(matrixVal.e) * Number(matrixVal.c);
    m31 = op1 - op2;
    result = Math.pow(-1, 3 + 1) * m31;
    return result;
  };
  const C32 = () => {
    let op1, op2, m32, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.f);
    op2 = Number(matrixVal.d) * Number(matrixVal.c);
    m32 = op1 - op2;
    result = Math.pow(-1, 3 + 2) * m32;
    return result;
  };
  const C33 = () => {
    let op1, op2, m33, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.e);
    op2 = Number(matrixVal.d) * Number(matrixVal.b);
    m33 = op1 - op2;
    result = Math.pow(-1, 3 + 3) * m33;
    return result;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const adjoint11 = C11();
    const adjoint12 = C12();
    const adjoint13 = C13();
    const adjoint21 = C21();
    const adjoint22 = C22();
    const adjoint23 = C23();
    const adjoint31 = C31();
    const adjoint32 = C32();
    const adjoint33 = C33();
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
      rc13: adjoint13,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc21: adjoint21,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc22: adjoint22,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc23: adjoint23,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc31: adjoint31,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc32: adjoint32,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc33: adjoint33,
    }));
  };

  return (
    <>
      <div className="input_grid_three">
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
            <input
              type="number"
              name="e"
              value={matrixVal.e}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="f"
              value={matrixVal.f}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="g"
              value={matrixVal.g}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="h"
              value={matrixVal.h}
              className="inp"
              onChange={inputEventHandler}
            />
            <input
              type="number"
              name="i"
              value={matrixVal.i}
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
        <h1>{finalResult.rc13}</h1>
        <h1>{finalResult.rc21}</h1>
        <h1>{finalResult.rc22}</h1>
        <h1>{finalResult.rc23}</h1>
        <h1>{finalResult.rc31}</h1>
        <h1>{finalResult.rc32}</h1>
        <h1>{finalResult.rc33}</h1>
      </div>
    </>
  );
};

export default ThreeByThree;
