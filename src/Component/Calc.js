import React, { Component } from 'react';
import Calculator from './Calculator';
import Result from './Result';
class Calc extends Component {
    state = {
      output:""
    }
  
    buttonPressed = buttonName =>{
      if(buttonName === '='){
        this.Calculate()
      }else if(buttonName === 'AC'){
        this.reset()
      }else if(buttonName === 'DEL'){
        this.backspace()
      }else
      this.setState({
        output:this.state.output + buttonName
      })
  
    }
  
    backspace = () =>{
      this.setState({ 
       output:this.state.output.slice(0,-1)
      })
    }
    reset = () => {
       this.setState({
         output:""
       })
    }
  
    
   
    Calculate = () =>{
      try{this.setState({
        output:eval(this.state.output)
        
      })}catch(event){
        this.setState({
          output:'error'
        })
      }
    }
    render(){
    return (
      <div className="App">
        <div className='calc-body'>
        <Result output = {this.state.output}/>
       <Calculator buttonPressed ={this.buttonPressed}/>
      </div>
      </div>
    );
  }
  }
  
  
 

export default Calc;