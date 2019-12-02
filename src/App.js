import React from 'react';
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

const App = ()=>{

  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age:5},
    { name: "None",age:3}
  ]




  return (
  <div>
    {
      profiles.map((profiles,index)=>{
        return <User name={profiles.name} age={profiles.age} key={index} />
      })
    }
  </div>
  )
}


const User= (props)=>{
  return <div>Hi, I am{props.name}! and {props.age} years old! </div>
}

User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}

export default App;
