import React, { Component } from "react"

class Forms extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            age:"",
            salary:"",
            user:[]
        }
    }
     HandleChange=(e)=>{
         this.setState({
          [e.target.name]:e.target.value
         })
     }

     HandleSubmit=(event)=>{
          event.preventDefault();
        const Tempobj={
            name:this.state.name,
            age:this.state.age,
            salary:this.state.salary,
        }

        const TempArr=this.state.user;
        TempArr.push(Tempobj)
      this.setState({
          user:TempArr
      })

     }

    render(){
        return(
            <>
            <div>
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.HandleChange} value={this.state.name}/><br/>

                    <label>Age:</label><br/>
                    <input type="number" name="age" onChange={this.HandleChange} value={this.state.age} /><br/>

                    <label>Salary:</label><br/>
                    <input type="number" name="salary" onChange={this.HandleChange} value={this.state.salary} />
                </form>
                <button onClick={this.HandleSubmit}>Submit</button>
            </div>
            <div>
                {
                    this.state.user.map(value=>
                     <div>
                         <h1>{value.name}</h1>
                         <p>{value.age}</p>
                         <p>{value.salary}</p>
                     </div>
                    )
                }
            </div>

            </>
        )
    }
}
export default Forms  