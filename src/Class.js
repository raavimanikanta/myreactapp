import React, { Component } from "react" 

class ClassComponent extends Component {
   constructor(){
       super();
       this.state={
           DEtails:true,
       }
   }
   clicked=()=>{
       this.setState({
           DEtails: !this.state.DEtails,
       })
   }
   render(){
       return(
           <>
           <div>
               {
                   this.state.DEtails ? 
                   <h1 style={{color:'red'}}>Hello iam class component 1</h1>
                   :
                   <h1 style={{color:"green"}}>Hello iam class component2</h1>
               }
           </div>
           <button onClick={this.clicked}>click here</button>
           </>
           
       )
   }
}
export default ClassComponent