import React, { Component } from "react";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      n: 100,
    };
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p>{this.state.n}</p>
        <br />
        <button onClick={this.setN}>按钮</button>
      </div>
    );
  }
  setN = () => {
    this.setState({ n: this.state.n + 1 });
  };
}
