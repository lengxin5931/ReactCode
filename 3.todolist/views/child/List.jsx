import React, { Component } from "react";
import Context from "../../utils/Context";
import Item from "./Item";
export default class List extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="list">
        <ul>
          {this.context.todos.map((item, index) => {
            return <Item key={index} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}
