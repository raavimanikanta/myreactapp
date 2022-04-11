import React, { useState } from "react" 

const Function =()=>{
    const [state,setstate]=useState("true");
    const HandleChange=()=>{
        setstate(!state)
    }
    return (
        <>
         <div>
             {
                 state ? 
                 <div className="fun1">Functional component 1 </div> 
                 :
                 <div className="fun2">Functional component 2</div>
             }
         </div>
         <button onClick={HandleChange}>Click Here</button>
        </>
    )
}
export default Function 