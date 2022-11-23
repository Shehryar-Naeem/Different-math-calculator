import React, { useState } from "react";
import moon from "../Images/moon.png"
import sun from "../Images/sun.png"
import Header from "./Header/Header";
import KeyPad from "./KeyPad/KeyPad";
const SimpleCalculator=()=>{
    const [isDarkMode,setIsDarkMode] = useState(false)
    return (
        <>
            <div className="simple">
                <div className="simple_calculator" required="dark">
                    <div className="simple_calculator_navbar">
                        <div className="simple_calculator_navbar_toggle" onClick={()=>setIsDarkMode(!isDarkMode)}>
                            <div className={`simple_calculator_navbar_toggle_circle ${isDarkMode ? "simple_calculator_navbar_toggle_circle_active" : ""}`}/>
                        </div>
                        <img src={isDarkMode?moon:sun} alt="Moon"/>
                    </div>
                    <Header isDarkMode={isDarkMode}/>
                    <KeyPad/>
                </div>
            </div>
        </>
    )
}

export default SimpleCalculator