import React, { Component } from "react";
import Context from "../../utils/context";

export default class LIst extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="list">
        <ul>
          <li>
            <p>预约时间</p>
            <p>支付方式</p>
            <p>支付账号</p>
            <p>支付金额</p>
          </li>
          {this.context.list.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.time}</p>
                <p>{item.method}</p>
                <p>{item.account}</p>
                <p>{item.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
