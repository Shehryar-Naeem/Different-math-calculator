import React from "react";


const KeyPad =({isDarkMode,handleKeyPress})=>{
    const keys=[
        {
          keyCode:55,
          label:"7"
        },{
          keyCode:56,
          label:"8"
        },{
          keyCode:57,
          label:"9"
        },{
          keyCode:52,
          label:"4",
        },
        {
          keyCode:53,
          label:"5"
        },
        {
          keyCode:54,
          label:"6"
        },{
          keyCode:49,
          label:"1"
        },{
          keyCode:50,
          label:"2"
        },{
          keyCode:51,
          label:"3"
        },{
          keyCode:48,
          label:"0"
        },{
          keyCode:190,
          label:"."
        },{
          keyCode:13,
          label:"="
        }
     ]
     
     
     const operator=[
       {
         keyCode: 8,
         label: "⌫",
         value: "backspace"
       },
       {
         keyCode: 111,
         label:"÷",
         value: "/"
       },{
         keyCode:56,
         label:"×",
         value: "*"
       },{
         keyCode: 109,
         label:"-",
         value:"-"
       },{
         keyCode: 107,
         label:"+",
         value:"+"
       }
     ]
     
    return (
        <>
            <div className={isDarkMode ?"dark_keypad":"keypad"}>
                <div className="keypad_keys">
                    {
                        keys.map((item,index)=>{
                            return (
                                <p key={index} onClick={()=>handleKeyPress(item.keyCode,item.label)}>{item.label}</p>
                            )
                        })
                    }
                </div>
                <div className="keypad_symbols">
                    {
                        operator.map((item,index)=>{
                            return (
                                <p key={index} onClick={()=>handleKeyPress(item.keyCode,item.value)}>{item.label}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default KeyPad