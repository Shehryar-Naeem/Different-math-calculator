import React, { useState } from "react";

const FourByFour = () => {
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
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });
  const [finalResult, setFinanlResult] = useState({
    rc11: "",
    rc12: "",
    rc13: "",
    rc14: "",
    rc21: "",
    rc22: "",
    rc23: "",
    rc24: "",
    rc31: "",
    rc32: "",
    rc33: "",
    rc34: "",
    rc41: "",
    rc42: "",
    rc43: "",
    rc44: "",
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
  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    setMatrixVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const C11 = () => {
    let op1, op2, op3, op4, op5, op6, m11, result;
    op1 = Number(matrixVal.f) * Number(matrixVal.k) * Number(matrixVal.p);
    op2 = Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.l);
    op3 = Number(matrixVal.g) * Number(matrixVal.j) * Number(matrixVal.p);
    op4 = Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.l);
    op5 = Number(matrixVal.h) * Number(matrixVal.j) * Number(matrixVal.o);
    op6 = Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.k);
    m11 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 1 + 1) * m11;
    return result;
  };
  const C12 = () => {
    let op1, op2, op3, op4, op5, op6, m12, result;
    op1 = Number(matrixVal.e) * Number(matrixVal.k) * Number(matrixVal.p);
    op2 = Number(matrixVal.e) * Number(matrixVal.o) * Number(matrixVal.l);
    op3 = Number(matrixVal.g) * Number(matrixVal.i) * Number(matrixVal.p);
    op4 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.l);
    op5 = Number(matrixVal.h) * Number(matrixVal.i) * Number(matrixVal.o);
    op6 = Number(matrixVal.h) * Number(matrixVal.m) * Number(matrixVal.k);
    m12 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 1 + 2) * m12;
    return result;
  };
  const C13 = () => {
    let op1, op2, op3, op4, op5, op6, m13, result;
    op1 = Number(matrixVal.e) * Number(matrixVal.j) * Number(matrixVal.p);
    op2 = Number(matrixVal.e) * Number(matrixVal.n) * Number(matrixVal.l);
    op3 = Number(matrixVal.f) * Number(matrixVal.i) * Number(matrixVal.p);
    op4 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.l);
    op5 = Number(matrixVal.h) * Number(matrixVal.i) * Number(matrixVal.n);
    op6 = Number(matrixVal.h) * Number(matrixVal.m) * Number(matrixVal.j);
    m13 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 1 + 3) * m13;
    return result;
  };
  const C14 = () => {
    let op1, op2, op3, op4, op5, op6, m14, result;
    op1 = Number(matrixVal.e) * Number(matrixVal.j) * Number(matrixVal.o);
    op2 = Number(matrixVal.e) * Number(matrixVal.n) * Number(matrixVal.k);
    op3 = Number(matrixVal.f) * Number(matrixVal.i) * Number(matrixVal.o);
    op4 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.k);
    op5 = Number(matrixVal.g) * Number(matrixVal.i) * Number(matrixVal.n);
    op6 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.j);
    m14 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 1 + 4) * m14;
    return result;
  };
  const C21 = () => {
    let op1, op2, op3, op4, op5, op6, m21, result;
    op1 = Number(matrixVal.b) * Number(matrixVal.k) * Number(matrixVal.p);
    op2 = Number(matrixVal.b) * Number(matrixVal.o) * Number(matrixVal.l);
    op3 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.p);
    op4 = Number(matrixVal.c) * Number(matrixVal.n) * Number(matrixVal.l);
    op5 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.o);
    op6 = Number(matrixVal.d) * Number(matrixVal.n) * Number(matrixVal.k);
    m21 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 2 + 1) * m21;
    return result;
  };
  const C22 = () => {
    let op1, op2, op3, op4, op5, op6, m22, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.k) * Number(matrixVal.p);
    op2 = Number(matrixVal.a) * Number(matrixVal.o) * Number(matrixVal.l);
    op3 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.p);
    op4 = Number(matrixVal.c) * Number(matrixVal.m) * Number(matrixVal.l);
    op5 = Number(matrixVal.d) * Number(matrixVal.i) * Number(matrixVal.o);
    op6 = Number(matrixVal.d) * Number(matrixVal.m) * Number(matrixVal.k);
    m22 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 2 + 2) * m22;
    return result;
  };
  const C23 = () => {
    let op1, op2, op3, op4, op5, op6, m23, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.p);
    op2 = Number(matrixVal.a) * Number(matrixVal.n) * Number(matrixVal.l);
    op3 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.p);
    op4 = Number(matrixVal.b) * Number(matrixVal.m) * Number(matrixVal.l);
    op5 = Number(matrixVal.d) * Number(matrixVal.i) * Number(matrixVal.n);
    op6 = Number(matrixVal.d) * Number(matrixVal.m) * Number(matrixVal.j);
    m23 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 2 + 3) * m23;
    return result;
  };
  const C24 = () => {
    let op1, op2, op3, op4, op5, op6, m24, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.o);
    op2 = Number(matrixVal.a) * Number(matrixVal.n) * Number(matrixVal.k);
    op3 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.o);
    op4 = Number(matrixVal.b) * Number(matrixVal.m) * Number(matrixVal.k);
    op5 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.n);
    op6 = Number(matrixVal.c) * Number(matrixVal.m) * Number(matrixVal.j);
    m24 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 2 + 4) * m24;
    return result;
  };
  const C31 = () => {
    let op1, op2, op3, op4, op5, op6, m31, result;
    op1 = Number(matrixVal.b) * Number(matrixVal.g) * Number(matrixVal.p);
    op2 = Number(matrixVal.b) * Number(matrixVal.o) * Number(matrixVal.h);
    op3 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.p);
    op4 = Number(matrixVal.c) * Number(matrixVal.n) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.o);
    op6 = Number(matrixVal.d) * Number(matrixVal.n) * Number(matrixVal.g);
    m31 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 3 + 1) * m31;
    return result;
  };
  const C32 = () => {
    let op1, op2, op3, op4, op5, op6, m32, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.p);
    op2 = Number(matrixVal.a) * Number(matrixVal.o) * Number(matrixVal.h);
    op3 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.p);
    op4 = Number(matrixVal.c) * Number(matrixVal.m) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.o);
    op6 = Number(matrixVal.d) * Number(matrixVal.m) * Number(matrixVal.g);
    m32 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 3 + 2) * m32;
    return result;
  };
  const C33 = () => {
    let op1, op2, op3, op4, op5, op6, m33, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.p);
    op2 = Number(matrixVal.a) * Number(matrixVal.n) * Number(matrixVal.h);
    op3 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.p);
    op4 = Number(matrixVal.b) * Number(matrixVal.m) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.n);
    op6 = Number(matrixVal.d) * Number(matrixVal.m) * Number(matrixVal.f);
    m33 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 3 + 3) * m33;
    return result;
  };
  const C34 = () => {
    let op1, op2, op3, op4, op5, op6, m34, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.o);
    op2 = Number(matrixVal.a) * Number(matrixVal.n) * Number(matrixVal.g);
    op3 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.o);
    op4 = Number(matrixVal.b) * Number(matrixVal.m) * Number(matrixVal.g);
    op5 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.n);
    op6 = Number(matrixVal.c) * Number(matrixVal.m) * Number(matrixVal.f);
    m34 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 3 + 4) * m34;
    return result;
  };
  const C41 = () => {
    let op1, op2, op3, op4, op5, op6, m41, result;
    op1 = Number(matrixVal.b) * Number(matrixVal.g) * Number(matrixVal.l);
    op2 = Number(matrixVal.b) * Number(matrixVal.k) * Number(matrixVal.h);
    op3 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.l);
    op4 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.k);
    op6 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.g);
    m41 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 4 + 1) * m41;
    return result;
  };
  const C42 = () => {
    let op1, op2, op3, op4, op5, op6, m42, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.l);
    op2 = Number(matrixVal.a) * Number(matrixVal.k) * Number(matrixVal.h);
    op3 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.l);
    op4 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.k);
    op6 = Number(matrixVal.d) * Number(matrixVal.i) * Number(matrixVal.g);
    m42 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 4 + 2) * m42;
    return result;
  };
  const C43 = () => {
    let op1, op2, op3, op4, op5, op6, m43, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.l);
    op2 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.h);
    op3 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.l);
    op4 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.h);
    op5 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.j);
    op6 = Number(matrixVal.d) * Number(matrixVal.i) * Number(matrixVal.f);
    m43 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 4 + 3) * m43;
    return result;
  };
  const C44 = () => {
    let op1, op2, op3, op4, op5, op6, m44, result;
    op1 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.k);
    op2 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.g);
    op3 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.k);
    op4 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.g);
    op5 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.j);
    op6 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.f);
    m44 = op1 - op2 - op3 + op4 + op5 - op6;
    result = Math.pow(-1, 4 + 4) * m44;
    return result;
  };
  const sumbitHandler = (event) => {
    event.preventDefault();
    const adjoint11 = C11();
    const adjoint12 = C12();
    const adjoint13 = C13();
    const adjoint14 = C14();
    const adjoint21 = C21();
    const adjoint22 = C22();
    const adjoint23 = C23();
    const adjoint24 = C24();
    const adjoint31 = C31();
    const adjoint32 = C32();
    const adjoint33 = C33();
    const adjoint34 = C34();
    const adjoint41 = C41();
    const adjoint42 = C42();
    const adjoint43 = C43();
    const adjoint44 = C44();

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
      rc14: adjoint14,
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
      rc22: adjoint22,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc23: adjoint23,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc24: adjoint24,
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
    setFinanlResult((preVal) => ({
      ...preVal,
      rc34: adjoint34,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc41: adjoint41,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc42: adjoint42,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc43: adjoint43,
    }));
    setFinanlResult((preVal) => ({
      ...preVal,
      rc44: adjoint44,
    }));
  };
  return (
    <div className="input_grid_four">
      <form onSubmit={sumbitHandler}>
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
          <input
            type="number"
            name="j"
            value={matrixVal.j}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="k"
            value={matrixVal.k}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="l"
            value={matrixVal.l}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="m"
            value={matrixVal.m}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="n"
            value={matrixVal.n}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="o"
            value={matrixVal.o}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="p"
            value={matrixVal.p}
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
      <h1>{finalResult.rc14}</h1>
      <h1>{finalResult.rc21}</h1>
      <h1>{finalResult.rc22}</h1>
      <h1>{finalResult.rc23}</h1>
      <h1>{finalResult.rc24}</h1>
      <h1>{finalResult.rc31}</h1>
      <h1>{finalResult.rc32}</h1>
      <h1>{finalResult.rc33}</h1>
      <h1>{finalResult.rc34}</h1>
      <h1>{finalResult.rc41}</h1>
      <h1>{finalResult.rc42}</h1>
      <h1>{finalResult.rc43}</h1>
      <h1>{finalResult.rc44}</h1>
    </div>
  );
};

export default FourByFour;
