import "./App.scss";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "",
    pass: "",
  };
  render() {
    let { name, pass } = this.state;
    return (
      <div className="box">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            this.setState({ pass: e.target.value });
          }}
        />
        <br />
        <button
          onClick={() => {
            console.log(this.state);
            this.setState({
              name: "",
              pass: "",
            });
          }}
        >
          按钮
        </button>
      </div>
    );
  }
}
