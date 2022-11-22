// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import LeftSideComponent from "./Component/LeftSideComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdjointCalculator from "./Pages/AjointCalculator";
import SimpleCalculator from "./Pages/SimpleCalculator";
import Home from "./Pages/Home";


// const month = [
//   "January",
//   "Febrauay",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const setMonth = new Date().getMonth();
// const getMonth = month[setMonth];
// const getDate = new Date().getDate();
// const getYear = new Date().getFullYear();
// let getTime = new Date().toLocaleTimeString();
const App = () => {
 
  
  // const [ctime, setCTime] = useState(getTime);

  // const updateTime = () => {
  //   getTime = new Date().toLocaleTimeString();
  //   setCTime(getTime);
  // };
  // setInterval(updateTime, 1000);
  // const [colSelect,setColSelect]= useState("")
  // let arr= []

  // function showArr(){
  //     for(let i=0;i<rowSelect;i++){
  //     }

  //     for(let i=0;i<rowSelect;i++){
  //         arr[i]=[]

  //         for(let j=0;j<colSelect;j++){
  //             arr[i][j]=<input style={{width:"2rem"}}/>;

  //         }
  //         <br/>
  //     }
  //     return arr;
  // }

  // const [showList,setShowList]= useState(showArr)

 

  return (
    <>
    <Router>
      <section className="container">
        <LeftSideComponent/>
        <Routes>
          <Route path="/" element={<SimpleCalculator/>}/>
          <Route path="/determinant_calculator" element={<Home/>}/>
          <Route path="adjoint_calculator" element={<AdjointCalculator/>}/>
        </Routes>
        
      </section>
      </Router>
    </>
  );
};

export default App;
