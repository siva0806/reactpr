// import React, { Component } from "react";
// import Propstwo from "./components/Propstwo";
// import Listui from "./components/listui";
// import Fun from "./components/fun";



// class App extends Component {

//   state = {
//     count: 0
//   }

//   minus = () => {
//     this.setState({ count: this.state.count -1 })
//   }
//   render() {

//     return (
//       <>
//         <h1>total ticket :{this.state.count}</h1>
//         <button onClick={this.minus}>add</button>
//       */}
// {/* <Listui /> */}
//      {/* <Propstwo movie={"leo"} newm={this.minus} />
//      <Propstwo movie={"jawan"}newm={this.minus} />
//      <Propstwo movie={"markantony"}newm={this.minus} />
//      <Propstwo movie={"hero"}newm={this.minus} />

     
//       </>
//     )

//   }
// }
// export default App

import React from 'react'
import Fun from './components/fun'
import TodoList from './components/TodoList'
import Form from './components/form'

export default function () {
  return (
    <div>
{/* <Fun/> */}
<Form />
{/* <TodoList/> */}


    </div>
  )
}
