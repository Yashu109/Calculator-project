import React,{Component} from "react";
 class Result extends Component{
    render(){
        return(
            <div className='output'>
              <p>{this.props.output}</p>  
            </div>
        )
    }
}

export default Result