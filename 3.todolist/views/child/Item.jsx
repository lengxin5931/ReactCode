import React, { Component } from "react";
import Context from "../../utils/Context";

export default class Item extends Component {
  static contextType = Context;
  render() {
    let { index } = this.props;
    let { todos } = this.context;
    return (
      <li className="item">
        <div className="left">
          <input
            type="checkbox"
            checked={todos[index].done}
            onChange={() => {}}
          />
          <span>{todos[index].name}</span>
        </div>
        <p>删除</p>
      </li>
    );
  }
}
