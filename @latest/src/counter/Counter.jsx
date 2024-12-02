import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5, 
  };

 
  increment = () => {
    this.setState({  count:this.state.count + 1 });
  };

 
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
   
const count= this.state.count;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {count} </h1>

      
        <button
          onClick={this.increment}
          style={{
            margin: "10px",
            padding: "10px 20px",
            
          }}
        >
        Add
        </button>
        <button
          onClick={this.decrement}
          style={{
            margin: "10px",
            padding: "10px 20px",
           
          }}
        >
          Decrease
        </button>

       
        <p style={{ color: count === 5 ? "red" : "black" }}>
        Text notchanged when count=5
        </p>
        <p style={{ color: count > 5 ? "green" : "black" }}>
        Text notchanged when count greater than 5

        </p>
        <p style={{ color: count < 5 ? "blue" : "black" }}>
        Text notchanged when count less than 5

        </p>
      </div>
    );
  }
}

export default Counter;
