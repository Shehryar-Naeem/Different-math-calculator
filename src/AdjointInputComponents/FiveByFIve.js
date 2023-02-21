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

  const [finalResult, SetFinalResult] = useState({
    rc11: "",
    rc12: "",
    rc13: "",
    rc14: "",
    rc15: "",
    rc21: "",
    rc22: "",
    rc23: "",
    rc24: "",
    rc25: "",
    rc31: "",
    rc32: "",
    rc33: "",
    rc34: "",
    rc35: "", 
    rc41: "",
    rc42: "",
    rc43: "",
    rc44: "",
    rc45: "",
    rc51: "",
    rc52: "",
    rc53: "",
    rc54: "",
    rc55: "",
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
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m11,
      result;

    op1 = Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y);
    op16 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w);
    op18 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x);
    op22 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w);
    op24 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m11 =
      Number(matrixVal.g) * innerop1 -
      Number(matrixVal.h) * innerop2 +
      Number(matrixVal.i) * innerop3 -
      Number(matrixVal.j) * innerop4;

    result = Math.pow(-1, 1 + 1) * m11;

    return result;
  };
  const C12 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m12,
      result;

    op1 = Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w);
    op24 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m12 =
      Number(matrixVal.f) * innerop1 -
      Number(matrixVal.h) * innerop2 +
      Number(matrixVal.i) * innerop3 -
      Number(matrixVal.j) * innerop4;

    result = Math.pow(-1, 1 + 2) * m12;

    return result;
  };
  const C13 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m13,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m13 =
      Number(matrixVal.f) * innerop1 -
      Number(matrixVal.g) * innerop2 +
      Number(matrixVal.i) * innerop3 -
      Number(matrixVal.j) * innerop4;

    result = Math.pow(-1, 1 + 3) * m13;

    return result;
  };
  const C14 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m14,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y);
    op2 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t);
    op3 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t);
    op9 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m14 =
      Number(matrixVal.f) * innerop1 -
      Number(matrixVal.g) * innerop2 +
      Number(matrixVal.h) * innerop3 -
      Number(matrixVal.j) * innerop4;

    result = Math.pow(-1, 1 + 4) * m14;

    return result;
  };
  const C15 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m15,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x);
    op2 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s);
    op3 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x);
    op4 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s);
    op5 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x);
    op8 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s);
    op9 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x);
    op10 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s);
    op11 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s);
    op17 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m15 =
      Number(matrixVal.f) * innerop1 -
      Number(matrixVal.g) * innerop2 +
      Number(matrixVal.h) * innerop3 -
      Number(matrixVal.i) * innerop4;

    result = Math.pow(-1, 1 + 5) * m15;

    return result;
  };
  const C21 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m21,
      result;

    op1 = Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y);
    op16 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w);
    op18 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x);
    op22 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w);
    op24 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m21 =
      Number(matrixVal.b) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 2 + 1) * m21;

    return result;
  };
  const C22 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m22,
      result;

    op1 = Number(matrixVal.m) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.m) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w);
    op24 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m22 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 2 + 2) * m22;

    return result;
  };
  const C23 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m23,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.l) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.x);
    op6 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m23 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 2 + 3) * m23;

    return result;
  };
  const C24 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m24,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.y);
    op2 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.t);
    op3 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.o) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.o) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.y);
    op8 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.t);
    op9 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.o) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.o) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m24 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 2 + 4) * m24;

    return result;
  };
  const C25 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m25,
      result;

    op1 = Number(matrixVal.l) * Number(matrixVal.r) * Number(matrixVal.x);
    op2 = Number(matrixVal.l) * Number(matrixVal.w) * Number(matrixVal.s);
    op3 = Number(matrixVal.m) * Number(matrixVal.q) * Number(matrixVal.x);
    op4 = Number(matrixVal.m) * Number(matrixVal.v) * Number(matrixVal.s);
    op5 = Number(matrixVal.n) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.n) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.k) * Number(matrixVal.r) * Number(matrixVal.x);
    op8 = Number(matrixVal.k) * Number(matrixVal.w) * Number(matrixVal.s);
    op9 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.x);
    op10 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.s);
    op11 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.x);
    op14 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.s);
    op15 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.x);
    op16 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.s);
    op17 = Number(matrixVal.n) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.n) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.k) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.k) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.l) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.l) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.m) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.m) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m25 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.d) * innerop4;

    result = Math.pow(-1, 2 + 5) * m25;

    return result;
  };
  const C31 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m31,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.h) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.i) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.j) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.g) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.g) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.t);
    op11 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.y);
    op16 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.t);
    op17 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.w);
    op18 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.x);
    op22 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.s);
    op23 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.w);
    op24 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m31 =
      Number(matrixVal.b) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 3 + 1) * m31;

    return result;
  };
  const C32 = () => {
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m32,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.h) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.i) * Number(matrixVal.r) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.w) * Number(matrixVal.t);
    op5 = Number(matrixVal.j) * Number(matrixVal.r) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.w) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.t);
    op15 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.w);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.x);
    op20 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.s);
    op21 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.w);
    op24 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m32 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 3 + 2) * m32;

    return result;
  };
  const C33 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m33,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.s) * Number(matrixVal.y);
    op2 = Number(matrixVal.g) * Number(matrixVal.x) * Number(matrixVal.t);
    op3 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.s);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.s) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.x) * Number(matrixVal.t);
    op9 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.s);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.x);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.s);
    op21 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.x);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.s);
    op23 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m33 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 3 + 3) * m33;

    return result;
  }
  const C34 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m34,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.y);
    op2 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.t);
    op3 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.y);
    op4 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.t);
    op5 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.t);
    op9 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.y);
    op10 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.t);
    op11 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.t);
    op15 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.y);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.t);
    op17 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m34 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 3 + 4) * m34;

    return result;
  }
  const C35 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m35,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.x);
    op2 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.s);
    op3 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.x);
    op4 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.s);
    op5 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.w);
    op6 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.r);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.x);
    op8 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.s);
    op9 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.x);
    op10 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.s);
    op11 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.w);
    op12 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.r);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.x);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.s);
    op15 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.x);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.s);
    op17 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.v);
    op18 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.w);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.r);
    op21 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.w);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.r);
    op23 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.v);
    op24 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.q);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m35 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.d) * innerop4;

    result = Math.pow(-1, 3 + 5) * m35;

    return result;
  }
  const C41 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m41,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.y);
    op2 = Number(matrixVal.h) * Number(matrixVal.x) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.w) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.w) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.y);
    op8 = Number(matrixVal.g) * Number(matrixVal.x) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.y);
    op14 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.o);
    op15 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.y);
    op16 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.w);
    op18 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.m);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.x);
    op20 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.n);
    op21 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.x);
    op22 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.w);
    op24 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.m);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m41 =
      Number(matrixVal.b) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 4 + 1) * m41;

    return result;
  }
  const C42 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m42,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.y);
    op2 = Number(matrixVal.h) * Number(matrixVal.x) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.w) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.w) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.x) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.o);
    op15 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.y);
    op16 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.w);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.m);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.x);
    op20 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.n);
    op21 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.x);
    op22 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.w);
    op24 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.m);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m42 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 4 + 2) * m42;

    return result;
  }
  const C43 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m43,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.y);
    op2 = Number(matrixVal.g) * Number(matrixVal.x) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.y);
    op4 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.x);
    op6 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.x) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.y);
    op10 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.x);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.o);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.y);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.v);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.x);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.n);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.x);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.v);
    op24 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m43 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 4 + 3) * m43;

    return result;
  }
  const C44 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m44,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.y);
    op2 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.o);
    op3 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.y);
    op4 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.w);
    op6 = Number(matrixVal.j) * Number(matrixVal.v) * Number(matrixVal.m);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.y);
    op8 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.o);
    op9 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.y);
    op10 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.w);
    op12 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.m);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.y);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.o);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.y);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.v);
    op18 = Number(matrixVal.j) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.w);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.m);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.w);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.m);
    op23 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.v);
    op24 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m44 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 4 + 4) * m44;

    return result;
  }
  const C45 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m45,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.x);
    op2 = Number(matrixVal.g) * Number(matrixVal.w) * Number(matrixVal.n);
    op3 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.x);
    op4 = Number(matrixVal.h) * Number(matrixVal.v) * Number(matrixVal.n);
    op5 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.w);
    op6 = Number(matrixVal.i) * Number(matrixVal.v) * Number(matrixVal.m);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.x);
    op8 = Number(matrixVal.f) * Number(matrixVal.w) * Number(matrixVal.n);
    op9 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.x);
    op10 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.n);
    op11 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.w);
    op12 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.m);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.x);
    op14 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.n);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.x);
    op16 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.n);
    op17 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.v);
    op18 = Number(matrixVal.i) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.w);
    op20 = Number(matrixVal.f) * Number(matrixVal.v) * Number(matrixVal.m);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.w);
    op22 = Number(matrixVal.g) * Number(matrixVal.u) * Number(matrixVal.m);
    op23 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.v);
    op24 = Number(matrixVal.h) * Number(matrixVal.u) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m45 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.d) * innerop4;

    result = Math.pow(-1, 4 + 5) * m45;

    return result;
  }
  const C51 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m51,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.t);
    op2 = Number(matrixVal.h) * Number(matrixVal.s) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.t);
    op4 = Number(matrixVal.i) * Number(matrixVal.r) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.s);
    op6 = Number(matrixVal.j) * Number(matrixVal.r) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.t);
    op8 = Number(matrixVal.g) * Number(matrixVal.s) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.t);
    op10 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.s);
    op12 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.t);
    op14 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.o);
    op15 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.t);
    op16 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.r);
    op18 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.m);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.s);
    op20 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.n);
    op21 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.s);
    op22 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.r);
    op24 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.m);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m51 =
      Number(matrixVal.b) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 5 + 1) * m51;

    return result;
  }
  const C52 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m52,
      result;

    op1 = Number(matrixVal.h) * Number(matrixVal.n) * Number(matrixVal.t);
    op2 = Number(matrixVal.h) * Number(matrixVal.s) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.m) * Number(matrixVal.t);
    op4 = Number(matrixVal.i) * Number(matrixVal.r) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.m) * Number(matrixVal.s);
    op6 = Number(matrixVal.j) * Number(matrixVal.r) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.t);
    op8 = Number(matrixVal.f) * Number(matrixVal.s) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.t);
    op10 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.s);
    op12 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.t);
    op14 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.o);
    op15 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.t);
    op16 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.r);
    op18 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.m);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.s);
    op20 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.n);
    op21 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.s);
    op22 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.r);
    op24 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.m);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m52 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.c) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 5 + 2) * m52;

    return result;
  }
  const C53 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m53,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.n) * Number(matrixVal.t);
    op2 = Number(matrixVal.g) * Number(matrixVal.s) * Number(matrixVal.o);
    op3 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.t);
    op4 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.s);
    op6 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.n);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.n) * Number(matrixVal.t);
    op8 = Number(matrixVal.f) * Number(matrixVal.s) * Number(matrixVal.o);
    op9 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.t);
    op10 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.s);
    op12 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.n);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.t);
    op14 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.o);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.t);
    op16 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.q);
    op18 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.s);
    op20 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.n);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.s);
    op22 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.n);
    op23 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.q);
    op24 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m53 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.d) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 5 + 3) * m53;

    return result;
  }
  const C54 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m54,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.t);
    op2 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.o);
    op3 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.t);
    op4 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.o);
    op5 = Number(matrixVal.j) * Number(matrixVal.l) * Number(matrixVal.r);
    op6 = Number(matrixVal.j) * Number(matrixVal.q) * Number(matrixVal.m);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.t);
    op8 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.o);
    op9 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.t);
    op10 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.o);
    op11 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.r);
    op12 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.m);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.t);
    op14 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.o);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.t);
    op16 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.o);
    op17 = Number(matrixVal.j) * Number(matrixVal.k) * Number(matrixVal.q);
    op18 = Number(matrixVal.j) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.r);
    op20 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.m);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.r);
    op22 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.m);
    op23 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.q);
    op24 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m54 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.e) * innerop4;

    result = Math.pow(-1, 5 + 4) * m54;

    return result;
  }
  const C55 = () =>{
    let op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      op13,
      op14,
      op15,
      op16,
      op17,
      op18,
      op19,
      op20,
      op21,
      op22,
      op23,
      op24,
      innerop1,
      innerop2,
      innerop3,
      innerop4,
      m55,
      result;

    op1 = Number(matrixVal.g) * Number(matrixVal.m) * Number(matrixVal.s);
    op2 = Number(matrixVal.g) * Number(matrixVal.r) * Number(matrixVal.n);
    op3 = Number(matrixVal.h) * Number(matrixVal.l) * Number(matrixVal.s);
    op4 = Number(matrixVal.h) * Number(matrixVal.q) * Number(matrixVal.n);
    op5 = Number(matrixVal.i) * Number(matrixVal.l) * Number(matrixVal.r);
    op6 = Number(matrixVal.i) * Number(matrixVal.q) * Number(matrixVal.m);

    innerop1 = op1 - op2 - op3 + op4 + op5 - op6;

    op7 = Number(matrixVal.f) * Number(matrixVal.m) * Number(matrixVal.s);
    op8 = Number(matrixVal.f) * Number(matrixVal.r) * Number(matrixVal.n);
    op9 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.s);
    op10 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.n);
    op11 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.r);
    op12 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.m);

    innerop2 = op7 - op8 - op9 + op10 + op11 - op12;

    op13 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.s);
    op14 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.n);
    op15 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.s);
    op16 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.n);
    op17 = Number(matrixVal.i) * Number(matrixVal.k) * Number(matrixVal.q);
    op18 = Number(matrixVal.i) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop3 = op13 - op14 - op15 + op16 + op17 - op18;

    op19 = Number(matrixVal.f) * Number(matrixVal.l) * Number(matrixVal.r);
    op20 = Number(matrixVal.f) * Number(matrixVal.q) * Number(matrixVal.m);
    op21 = Number(matrixVal.g) * Number(matrixVal.k) * Number(matrixVal.r);
    op22 = Number(matrixVal.g) * Number(matrixVal.p) * Number(matrixVal.m);
    op23 = Number(matrixVal.h) * Number(matrixVal.k) * Number(matrixVal.q);
    op24 = Number(matrixVal.h) * Number(matrixVal.p) * Number(matrixVal.l);

    innerop4 = op19 - op20 - op21 + op22 + op23 - op24;

    m55 =
      Number(matrixVal.a) * innerop1 -
      Number(matrixVal.b) * innerop2 +
      Number(matrixVal.c) * innerop3 -
      Number(matrixVal.d) * innerop4;

    result = Math.pow(-1, 5 + 5) * m55;

    return result;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const adjoint11 = C11();
    const adjoint12 = C12();
    const adjoint13 = C13();
    const adjoint14 = C14();
    const adjoint15 = C15();
    const adjoint21 = C21();
    const adjoint22 = C22();
    const adjoint23 = C23();
    const adjoint24 = C24();
    const adjoint25 = C25();
    const adjoint31 = C31();
    const adjoint32 = C32();
    const adjoint33 = C33();
    const adjoint34 = C34();
    const adjoint35 = C35();
    const adjoint41 = C41();
    const adjoint42 = C42();
    const adjoint43 = C43();
    const adjoint44 = C44();
    const adjoint45 = C45();
    const adjoint51 = C51();
    const adjoint52 = C52();
    const adjoint53 = C53();
    const adjoint54 = C54();
    const adjoint55 = C55();
    SetFinalResult((preVal) => ({
      ...preVal,
      rc11: adjoint11,
    }));
    SetFinalResult((preVal) => ({
      ...preVal,
      rc12: adjoint12,
    }));

    SetFinalResult((preVal) => ({
      ...preVal,
      rc13: adjoint13,
    }));
    SetFinalResult((preVal) => ({
      ...preVal,
      rc14: adjoint14,
    }));
    SetFinalResult((preval)=>(
      {
        ...preval,
        rc15: adjoint15
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc21: adjoint21
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc22 : adjoint22
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc23 : adjoint23
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc24 : adjoint24
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc25 : adjoint25
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc31 : adjoint31
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc32 : adjoint32
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc33 : adjoint33
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc34 : adjoint34
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc35 : adjoint35
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc41 : adjoint41
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc42 : adjoint42
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc43 : adjoint43
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc44 : adjoint44
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc45 : adjoint45
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc51 : adjoint51
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc52 : adjoint52
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc53 : adjoint53
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc54 : adjoint54
      }
    ))
    SetFinalResult((preVal)=>(
      {
        ...preVal,
        rc55 : adjoint55
      }
    ))
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
      <h2>{finalResult.rc11}</h2>
      <h2>{finalResult.rc12}</h2>
      <h1>{finalResult.rc13}</h1>
      <h2>{finalResult.rc14}</h2>
      <h2>{finalResult.rc15}</h2>
      <h2>{finalResult.rc21}</h2>
      <h2>{finalResult.rc22}</h2>
      <h2>{finalResult.rc23}</h2>
      <h2>{finalResult.rc24}</h2>
      <h2>{finalResult.rc25}</h2>
      <h2>{finalResult.rc31}</h2>
      <h2>{finalResult.rc32}</h2>
      <h2>{finalResult.rc33}</h2>
      <h2>{finalResult.rc34}</h2>
      <h2>{finalResult.rc35}</h2>
      <h2>{finalResult.rc41}</h2>
      <h2>{finalResult.rc42}</h2>
      <h2>{finalResult.rc43}</h2>
      <h2>{finalResult.rc44}</h2>
      <h2>{finalResult.rc45}</h2>
      <h2>{finalResult.rc51}</h2>
      <h2>{finalResult.rc52}</h2>
      <h2>{finalResult.rc53}</h2>
      <h2>{finalResult.rc54}</h2>
      <h2>{finalResult.rc55}</h2>
    </div>
  );
};

export default FiveByFive;
