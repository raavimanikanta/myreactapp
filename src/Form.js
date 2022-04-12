import React, { Component } from 'react'


class Form extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      age:"",
      salary:"",
      user:[],
      status:true
    }
  }
 
    clickedChanges=(e)=>{
      this.setState({
        [e.target.name]:e.target.value,
      })
    
   }

   handleSubmit=(event)=>{
    event.preventDefault()
    
  console.log("hello")
    const tempobj= {
           name:this.state.name,
           age:this.state.age,
           salary:this.state.salary,


    }
    const tempArr=this.state.user
    tempArr.push(tempobj)
    this.setState({
      
     user:tempArr
    })
    this.setState({
      status:!this.state.status
    })
  }
   handlesubmit1=()=>{
    this.setState({
      status:!this.state.status
    })
  }
  render() {
    return (
      <div>
        { this.state.status ?
          <div>
          <form>
          <label>Name</label>
          <input type="text" name="name" onChange={this.clickedChanges} value={this.state.name}/>
         
          <label>Age</label>
          <input type="text" name="age" onChange={this.clickedChanges} value={this.state.age} />
         
          <label>Salary</label>
          <input type="text" name="salary" onChange={this.clickedChanges} value={this.state.salary} />
         </form>
         <button onClick={this.handleSubmit}>submit</button>
         </div>
         :
<div>
{
 this.state.user.map((value)=>
   <div>
     <p>Name:{value.name}</p>
     <p>age:{value.age}</p>
     <p>salary:{value.salary}</p>
   </div>
 )
}
<button onClick={this.handlesubmit1}>back</button>  
</div>
     
        
 

}
</div>

)
}
        }
         

export default Form 