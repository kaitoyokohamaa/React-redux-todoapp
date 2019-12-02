import React,{Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=> {console.log("I am clicked")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = ()=> (<Counter></Counter>)

class Counter extends Component{
constructor(props){
  super(props)
  this.state={count:0}
}

handlePlusButton =() =>{
  console.log("handlePlusButton")
  console.log(this.state.count)
  this.setState({count:this.state.count +1})
}

handleMinusButton = ()=>{
  this.setState({count:this.state.count -1})
}
  render (){
    return (
     <React.Fragment> 
    <div>count:{this.state.count}</div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}
export default App;
