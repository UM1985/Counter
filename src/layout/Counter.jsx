import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  plus= ()=> {
    this.setState({
count : this.state.count +1
    })
  }

  minus =()=>{
 this.setState({
count : this.state.count >0 ? this.state.count -1 :this.state.count
    })
  }

  render() {
    return (
      <>
        <div className="col-6 mx-auto my-5 p-5 shadow-lg text-center">
            <h1 className="text-primary mb-5">Counter</h1>
          <h2 className="mb-3">{this.state.count}</h2>
          <button onClick={this.plus} className="btn btn-outline-success me-4">+</button>
          <button onClick={this.minus} className="btn btn-outline-danger">-</button>
        </div>
      </>
    );
  }
}

export default Counter;
