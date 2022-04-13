import React, { useState } from 'react'

const Function2 = () => {
    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[salary,setsalary]=useState("")
    const[Data,setData]=useState([])


    const HandleSubmit=(e)=>{
     e.preventDefault();
     const Tempobj={
         name:name,
         age:age,
         salary:salary,
     }
      let arr=Data
    arr.push(Tempobj);
       setData(arr)
       console.log(...Data)
    }

    
  return (
    <div>
<div>
          <form>
          <label>Name</label>
          <input type="text" name="name" onChange={(e)=>{setname(e.target.value)}}  value={name}/>
         
          <label>Age</label>
          <input type="number" name="age" onChange={(e)=>{setage(e.target.value)}}   value={age} />
         
          <label>Salary</label>
          <input type="number" name="salary" onChange={(e)=>{setsalary(e.target.value)}}   value={salary} />
         </form>
         <button onClick={HandleSubmit}>submit</button>
         </div>
         <div>
          {
            Data.map(value=>
             <div>
                 <p>name:{value.name}</p>
                 <p>age:{value.age}</p>
                 <p>salary{value.salary}</p>
             </div>
              )
          }
         </div>
         
    </div>
  )
}

export default Function2