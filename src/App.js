import React from "react";
import mathLogo from "./Images/mathProject.png"
const App =()=>{
    return (
        <>
            <section className="container">
                <div className="left_container">
                    <div className="img_container">
                        <img src={mathLogo} alt="mathLogo"/>
                    </div>
                    <ul>
                        <li>
                            Simple Calculator
                        </li>
                        <li>Determination Calculator in matrix</li>
                        <li>Adjoint Calculator in matrix</li>
                    </ul>
                </div>
                <div className="right_container">
                    <h1>Welcome to EasY MaTh with solution</h1>
                    <div className="right_container_calculator_portion">
                        <select>
                            <option></option>
                            <option>2*2 matrix</option>
                            <option>3*3 matrix</option>
                            <option>4*4 matrix</option>
                            <option>5*5 matrix</option>
                        </select>
                    </div>
                </div>
            </section>     
        </>

    )
}


export default App;