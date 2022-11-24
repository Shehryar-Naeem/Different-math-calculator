import React, { useEffect, useRef } from "react";


const Header=({isDarkMode,expression})=>{
 
    const resultRef= useRef()
    useEffect(()=>{
        resultRef.current.scrollIntoView({behavior:"smooth"})
    },[])
    return (
        <>
            <div className={isDarkMode?"change_Header custom_scroll":"header custom_scroll"}>
                <div className="header_history">
                    <p>10+8</p>
                    <p>20+8</p>
                    <p>203+8</p>
                    <p>150+8</p>
                    <p>10+8</p>
                    <p>20+8</p>
                    <p>203+8</p>
                    <p>150+8</p>
                    
                </div>
                <br/>
                <div className="header_expression custom_scroll">
                    <p>{expression}</p>
                </div>
                <p ref={resultRef} className="header_result">9</p>
            </div>
        </>
    )
}

export default Header