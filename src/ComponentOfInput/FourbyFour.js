import React, { useState } from "react";

const FourByFour = () => {
  const [matrixVal, setMatrixVal] = useState({
    c11: "",
    c12: "",
    c13: "",
    c14: "",
    c21: "",
    c22: "",
    c23: "",
    c24: "",
    c31: "",
    c32: "",
    c33: "",
    c34: "",
    c41: "",
    c42: "",
    c43: "",
    c44: "",
  });
  const inputEventHandler = (e) => {
    const { name, value } = e.target;
    setMatrixVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const [val, setVal] = useState({});
  const sumbitHandler = (e) => {
    e.preventDefault();
    setVal(matrixVal);
  };
  return (
    <div className="input_grid_four">
      <form onSubmit={sumbitHandler}>
        <div className="input_grid">
          <input
            type="number"
            name="c11"
            value={matrixVal.c11}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c12"
            value={matrixVal.c12}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c13"
            value={matrixVal.c13}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c14"
            value={matrixVal.c14}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c21"
            value={matrixVal.c21}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c22"
            value={matrixVal.c22}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c23"
            value={matrixVal.c23}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c24"
            value={matrixVal.c24}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c31"
            value={matrixVal.c31}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c32"
            value={matrixVal.c32}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c33"
            value={matrixVal.c33}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c34"
            value={matrixVal.c34}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c41"
            value={matrixVal.c41}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c42"
            value={matrixVal.c42}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c43"
            value={matrixVal.c43}
            onChange={inputEventHandler}
          />
          <input
            type="number"
            name="c44"
            value={matrixVal.c44}
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
      <p>{val.c11}</p>
      <p>{val.c12}</p>
      <p>{val.c13}</p>
      <p>{val.c14}</p>
      <p>{val.c21}</p>
      <p>{val.c22}</p>
      <p>{val.c23}</p>
      <p>{val.c24}</p>
      <p>{val.c31}</p>
      <p>{val.c32}</p>
      <p>{val.c33}</p>
      <p>{val.c34}</p>
      <p>{val.c41}</p>
      <p>{val.c42}</p>
      <p>{val.c43}</p>
      <p>{val.c44}</p>
    </div>
  );
};

export default FourByFour;
