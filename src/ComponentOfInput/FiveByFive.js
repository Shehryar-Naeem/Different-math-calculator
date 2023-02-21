import React, { useState } from "react";

const FiveByFive = () => {
  const [matrixVal, setMatrixVal] = useState({
    // a: Number(""),
    // b: Number(""),
    // c: Number(""),
    // d: Number(""),
    // e: Number(""),
    // f: Number(""),
    // g: Number(""),
    // h: Number(""),
    // i: Number(""),
    // j: Number(""),
    // k: Number(""),
    // l: Number(""),
    // m: Number(""),
    // n: Number(""),
    // o: Number(""),
    // p: Number(""),
    // q: Number(""),
    // r: Number(""),
    // s: Number(""),
    // t: Number(""),
    // u: Number(""),
    // v: Number(""),
    // w: Number(""),
    // x: Number(""),
    // y: Number(""),
      
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
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
  });
  const [finalResult, setFinalResult] = useState("");
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
  const determinantResult=()=>{
    let op1,op2,op3,op4,op5,op6,op7,op8,op9,op10,op11,op12,op13,op14,op15,op16,op17,op18,op19,op20,op21,op22,op23,op24,op25,op26,op27,op28,op29,op30,op31,op32,op33,op34,op35,op36,op37,op38,op39,op40,op41,op42,op43,op44,op45,op46,op47,op48,op49,op50,op51,op52,op53,op54,op55,op56,op57,op58,op59,op60,op61,op62,op63,op64,op65,op66,op67,op68,op69,op70,op71,op72,op73,op74,op75,op76,op77,op78,op79,op80,op81,op82,op83,op84,op85,op86,op87,op88,op89,op90,op91,op92,op93,op94,op95,op96,op97,op98,op99,op100,op101,op102,op103,op104,op105,op106,op107,op108,op109,op110,op111,op112,op113,op114,op115,op116,op117,op118,op119,op120;

    op1 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y)
    op2 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t)
    op3 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y)
    op4 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t)
    op5 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x)
    op6 = Number(matrixVal.a) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s)
    op7 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y)
    op8 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t)
    op9 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y)
    op10 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t)
    op11 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x)
    op12 = Number(matrixVal.a) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s)
    op13 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y)
    op14 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t)
    op15 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y)
    op16 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t)
    op17 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w)
    op18 = Number(matrixVal.a) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r)
    op19 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x)
    op20 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s)
    op21 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x)
    op22 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s)
    op23 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w)
    op24 = Number(matrixVal.a) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r)
    op25 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y)
    op26 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t)
    op27 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y)
    op28 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t)
    op29 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x)
    op30 = Number(matrixVal.b) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s)
    op31 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y)
    op32 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t)
    op33 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y)
    op34 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t)
    op35 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x)
    op36 = Number(matrixVal.b) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s)
    op37 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y)
    op38 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t)
    op39 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y)
    op40 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t)
    op41 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w)
    op42 = Number(matrixVal.b) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r)
    op43 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x)
    op44 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s)
    op45 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x)
    op46 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s)
    op47 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w)
    op48 = Number(matrixVal.b) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r)
    op49 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y)
    op50 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t)
    op51 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y)
    op52 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t)
    op53 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x)
    op54 = Number(matrixVal.c) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s)
    op55 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y)
    op56 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t)
    op57 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y)
    op58 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t)
    op59 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x)
    op60 = Number(matrixVal.c) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s)
    op61 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y)
    op62 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t)
    op63 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.y) * Number(matrixVal.p)
    op64 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t)
    op65 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v)
    op66 = Number(matrixVal.c) * Number(matrixVal.i) * Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.q)
    op67 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x)
    op68 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s)
    op69 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x)
    op70 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s)
    op71 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v)
    op72 = Number(matrixVal.c) * Number(matrixVal.j) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q)
    op73 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y)
    op74 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t)
    op75 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y)
    op76 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t)
    op77 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w)
    op78 = Number(matrixVal.d) * Number(matrixVal.f) * Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r)
    op79 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y)
    op80 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t)
    op81 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y)
    op82 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t)
    op83 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w)
    op84 = Number(matrixVal.d) * Number(matrixVal.g) * Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r)
    op85 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y)
    op86 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t) 
    op87 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.y)
    op88 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t)
    op89 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v)
    op90 = Number(matrixVal.d) * Number(matrixVal.h) * Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.u)
    op91 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w)
    op92 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r)
    op93 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w)
    op94 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r)
    op95 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v)
    op96 = Number(matrixVal.d) * Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q)
    op97 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x)
    op98 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s)
    op99 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x)
    op100 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s)
    op101 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w)
    op102 = Number(matrixVal.e) * Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r)
    op103 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x)
    op104 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s)
    op105 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x)
    op106 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s)
    op107 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w) 
    op108 = Number(matrixVal.e) * Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r)
    op109 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x)
    op110 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s)
    op111 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x)
    op112 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s) 
    op113 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v)
    op114 = Number(matrixVal.e) * Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q)
    op115 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w)
    op116 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r)
    op117 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w) 
    op118 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r)
    op119 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v)
    op120 = Number(matrixVal.e) * Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q)
    const result = op1 - op2 - op3 + op4 + op5 - op6 - op7 + op8 + op9 - op10 - op11 + op12 + op13 - op14 - op15 + op16 + op17 - op18 - op19 + op20 + op21 - op22 - op23 + op24 - op25 + op26 + op27 - op28 - op29 + op30 + op31 - op32 - op33 + op34 + op35 - op36 - op37 + op38 + op39 - op40 - op41 + op42 + op43 - op44 - op45 + op46 + op47 - op48 + op49 - op50 - op51 + op52 + op53 - op54 - op55 + op56 + op57 - op58 - op59 + op60 + op61 - op62 - op63 + op64 + op65 - op66 - op67 + op68 + op69 - op70 - op71 + op72 - op73 + op74 + op75 - op76 - op77 + op78 + op79 - op80 - op81 + op82 + op83 - op84 - op85 + op86 + op87 - op88 - op89 + op90 + op91 - op92 - op93 + op94 + op95 - op96 + op97 - op98 - op99 + op100 + op101 - op102 - op103 + op104 + op105 - op106 - op107 + op108 + op109 - op110 - op111 + op112 + op113 - op114 - op115 + op116 + op117 - op118 - op119 + op120
    return result;
    } 
  const submitHandler = (event) => {
    event.preventDefault();
    const determinant = determinantResult
    setFinalResult(determinant)
  };
  return (
    <div className="input_grid_five">
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
          <input
            type="number"
            name="q"
            value={matrixVal.q}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="r"
            value={matrixVal.r}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="s"
            value={matrixVal.s}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="t"
            value={matrixVal.t}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="u"
            value={matrixVal.u}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="v"
            value={matrixVal.v}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="w"
            value={matrixVal.w}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="x"
            value={matrixVal.x}
            className="inp"
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="y"
            value={matrixVal.y}
            className="inp"
            onChange={inputEventHandler}
          />
        </div>
        <div className="btn">
          <button type="submit">
            <i></i>
            <span>solution</span>{" "}
          </button>
        </div>
      </form>
      <h1>{finalResult}</h1>
    </div>
  );
};

export default FiveByFive;
