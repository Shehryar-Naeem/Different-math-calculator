import React, { useState } from "react";
import FiveByFive from "../AdjointInputComponents/FiveByFIve";
import FourByFour from "../AdjointInputComponents/FourByFour";
import SelectComponent from "../AdjointInputComponents/SelectComponet";
import ThreeByThree from "../AdjointInputComponents/ThreeByThree";
import TwobyTwo from "../AdjointInputComponents/TwoByTwo";
const AdjointCalculator = () => {
  const [Select, setSelect] = useState("");
  return (
    <>
      <div className="right_container">
        <div className="right_container_header">
          <h1 className="right_container_header_heading">
            Welcome to EasY MaTh with solution
          </h1>
          <div className="right_container_header_timer">
            {/* <span>
                {getMonth} {getDate},{getYear}
              </span>
              <br />
              <span>{ctime}</span> */}
          </div>
        </div>
        <div className="right_container_calculator_portion">
          <select value={Select} onChange={(e) => setSelect(e.target.value)}>
            <option></option>
            <option>2×2</option>
            <option>3×3</option>
            <option>4×4</option>
            <option>5×5</option>
          </select>

          {/* <select value={colSelect} onChange={(e)=>setColSelect(e.target.value)}>
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select> */}
        </div>
        <div>
          {/* {
                        showArr()
                    } */}
          {Select === "" ? (
            <SelectComponent />
          ) : Select === "2×2" ? (
            <TwobyTwo />
          ) : Select === "3×3" ? (
            <ThreeByThree />
          ) : Select === "4×4" ? (
            <FourByFour />
          ) : (
            <FiveByFive />
          )}
        </div>
      </div>
    </>
  );
};

export default AdjointCalculator;
