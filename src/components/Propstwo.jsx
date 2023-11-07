import React from "react";
import { Component } from "react";

class Propstwo extends Component {
    state= {
        movieticket:0
    }
    handle = ()=>{
        this.setState({movieticket:this.state.movieticket +1})
    }
    render(){
       
        return(
            <>
            <h1>propsp</h1>
            {/* <h2>movie : {this.props.movie}</h2> */}
            {/* <p>ticket count :{this.state.movieticket} tickets are booked</p>
            <button onClick={this.handle}> Ticket</button>
            
            <button onClick={this.props.newm}>total ticket</button> */}

         
            </>
        )
    }
}
export default Propstwo