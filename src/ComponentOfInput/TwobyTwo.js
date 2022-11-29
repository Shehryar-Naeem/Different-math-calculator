import React,{useState} from "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";

const TwobyTwo = () => {
  
  const [matrixVal,setMatrixVal]= useState({
    a:"",
    b:"",
    c:"",
    d:"", 
  })

  const [finalResult, setFinanlResult] = useState("")

  const inputEventHandler=(event)=>{
    const {name,value}= event.target;

    setMatrixVal((preVal)=>{
      return {
        ...preVal,
        [name]:value
      }
    })
  }
  const determinantResult=()=>{
    let op1,op2;
    op1= Number(matrixVal.a) * Number(matrixVal.d);
    op2= Number(matrixVal.c) * Number(matrixVal.b)

    const result = Math.round((op1 - op2)*100)/100 ;

    return result


  }
  const submitHandler=(event)=>{
    event.preventDefault();

    const determinant = determinantResult();

    setFinanlResult(determinant)



  }
  return (
    <>
    <div className="input_grid_two">
      <form onSubmit={submitHandler}>
        <div className="input_grid">
        <input type="number" name="a" value={matrixVal.a} onChange={inputEventHandler}/>
        <input type="number" name="b" value={matrixVal.b} onChange={inputEventHandler}/>
        <input type="number" name="c" value={matrixVal.c} onChange={inputEventHandler}/>
        <input type="number" name="d" value={matrixVal.d} onChange={inputEventHandler}/>
        </div>
        <div className="btn">
          <button type="submit"><i></i><span>solution</span></button>
        </div>
      </form>
      <h1>{finalResult}</h1>
    </div>
      </>
  );
};

export default TwobyTwo;
