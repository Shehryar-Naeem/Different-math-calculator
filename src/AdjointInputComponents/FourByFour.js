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
  const [finalResult,setFinanlResult]= useState("")
  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    setMatrixVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const determinantResult= ()=>{
    let op1,op2,op3,op4,op5,op6,op7,op8,op9,op10,op11,op12,op13,op14,op15,op16,op17,op18,op19,op20,op21,op22,op23,op24;

    op1 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.k) * Number(matrixVal.p)
    op2 = Number(matrixVal.a) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.l)
    op3 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.j) * Number(matrixVal.p)
    op4 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.l) 
    op5 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.h) * Number(matrixVal.o)
    op6 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.k)
    op7 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.k) * Number(matrixVal.p)
    op8 = Number(matrixVal.b) * Number(matrixVal.e) * Number(matrixVal.o) * Number(matrixVal.l)
    op9 = Number(matrixVal.b) * Number(matrixVal.g) * Number(matrixVal.i) * Number(matrixVal.p)
    op10 = Number(matrixVal.b) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.l)
    op11 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.i) * Number(matrixVal.o)
    op12 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.m) * Number(matrixVal.k)
    op13 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.j) * Number(matrixVal.p)
    op14 = Number(matrixVal.c) * Number(matrixVal.e) * Number(matrixVal.n) * Number(matrixVal.l)
    op15 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.i) * Number(matrixVal.p)
    op16 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.l)
    op17 = Number(matrixVal.c) * Number(matrixVal.h) * Number(matrixVal.i) * Number(matrixVal.n)
    op18 = Number(matrixVal.c) * Number(matrixVal.h) * Number(matrixVal.j) * Number(matrixVal.m)
    op19 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.j) * Number(matrixVal.o)
    op20 = Number(matrixVal.d) * Number(matrixVal.e) * Number(matrixVal.n) * Number(matrixVal.k)
    op21 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.i) * Number(matrixVal.o)
    op22 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.k)
    op23 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.i) * Number(matrixVal.n)
    op24 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.j) * Number(matrixVal.m)

    const result=  op1-op2-op3+op4+op5-op6-op7+op8+op9-op10-op11+op12+op13-op14-op15+op16+op17-op18-op19+op20+op21-op22-op23+op24;

    return result;
  }
  const sumbitHandler = (event) => {
    event.preventDefault();
    const determinant= determinantResult;
    setFinanlResult(determinant)

  };
  return (
    <div className="input_grid_four">
      <form onSubmit={sumbitHandler}>
        <div className="input_grid">
          <input
            type="number"
            name="a"
            value={matrixVal.a}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="b"
            value={matrixVal.b}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c"
            value={matrixVal.c}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="d"
            value={matrixVal.d}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="e"
            value={matrixVal.e}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="f"
            value={matrixVal.f}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="g"
            value={matrixVal.g}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="h"
            value={matrixVal.h}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="i"
            value={matrixVal.i}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="j"
            value={matrixVal.j}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="k"
            value={matrixVal.k}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="l"
            value={matrixVal.l}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="m"
            value={matrixVal.m}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="n"
            value={matrixVal.n}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="o"
            value={matrixVal.o}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="p"
            value={matrixVal.p}
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
      <h1>{finalResult}</h1>
      
    </div>
  );
};

export default FourByFour;
