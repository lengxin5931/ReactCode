import React, { Component } from "react";
import Context from "../../utils/context";

export default class MyButton extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="button">
        <p onClick={this.context.setAlert}>预约</p>
      </div>
    );
  }
}
