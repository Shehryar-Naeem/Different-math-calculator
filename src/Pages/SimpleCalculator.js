import React, { useState } from "react";
import moon from "../Images/moon.png";
import sun from "../Images/sun.png";
import Header from "./Header/Header";
import KeyPad from "./KeyPad/KeyPad";
const SimpleCalculator = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const useKeyCode = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
    104, 8, 13, 190, 187, 189, 191, 56, 11, 106, 107, 109,111
  ];
  const number =["0","1","2","3","4","5","6","7","8","9","0"]
  const operator =["-","*","+","/"]
  const handleKeyPress = (keyCode, key) => {
    if(!keyCode) return;

    if(!useKeyCode.includes(keyCode)) return

    if(number.includes(key)){
        if(key===0){
            if(expression.length===0) return
        }
        setExpression(expression+ key)
    }else if(operator.includes(key)){
        if(!expression) return
        const lastChar= expression.slice(-1);
        if(operator.includes(lastChar)) return
        if(lastChar=== ".") return
        setExpression(expression+ key )
    }else if(keyCode ===8){
        if(!expression) return

        setExpression(expression.slice(0,-1))
    }else if(keyCode === 13){
        console.log("enter");
    }
  };
  return (
    <>
      <div
        className="simple"
        tabIndex="0"
        onKeyDown={(e) => handleKeyPress(e.keyCode, e.key)}
      >
        <div className="simple_calculator" required="dark">
          <div className="simple_calculator_navbar">
            <div
              className="simple_calculator_navbar_toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`simple_calculator_navbar_toggle_circle ${
                  isDarkMode
                    ? "simple_calculator_navbar_toggle_circle_active"
                    : ""
                }`}
              />
            </div>
            <img src={isDarkMode ? moon : sun} alt="Moon" />
          </div>
          <Header isDarkMode={isDarkMode} handleKeyPress={handleKeyPress} expression={expression} />
          <KeyPad isDarkMode={isDarkMode} handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </>
  );
};

export default SimpleCalculator;
