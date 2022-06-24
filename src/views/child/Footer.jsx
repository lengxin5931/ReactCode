import React, { Component } from "react";
import Context from "../../utils/Context";

export default class Footer extends Component {
  static contextType = Context;
  get all() {
    return this.context.todos.every((item) => item.done);
  }
  get wc() {
    return this.context.todos.filter((item) => !item.done).length;
  }
  render() {
    return (
      <div className="footer">
        <div className="left">
          <input type="checkbox" checked={this.all} onChange={() => {}} />
          <span>
            已完成{this.wc}/全部{this.context.todos.length}
          </span>
        </div>
        <div className="right">
          <p>清除全部已完成</p>
        </div>
      </div>
    );
  }
}
