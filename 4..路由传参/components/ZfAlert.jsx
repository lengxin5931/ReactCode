import React, { Component } from "react";
import "./ZfAlert.css";
import Context from "../utils/context";

export default class ZfAlert extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="zf">
        <div className="con1">
          <div className="dd1h">
            <div className="d1d1">普通支付</div>
            <div className="d1d2">新币支付</div>
          </div>
          <div className="dd2h">
            <ul>
              <li>
                <p>1</p>
                <p>元</p>
              </li>
              <li>
                <p>5</p>
                <p>元</p>
              </li>
              <li>
                <p>18</p>
                <p>元</p>
              </li>
              <li>
                <p>188</p>
                <p>元</p>
              </li>
            </ul>
          </div>
          <div className="dd3h">
            <input type="radio" name="" id="" />
            <input type="text" placeholder="输入其他数量" />
            <p>元 </p>
          </div>
          <div className="dd4h">
            <p>支付宝</p>
            <p>微信</p>
          </div>
          <div className="dd5h">
            <p className="close" onClick={this.context.closeZfAlert}>
              关闭
            </p>
            <p
              className="ok"
              onClick={() => {
                this.context.closeZfAlert();
                this.context.myPush();
              }}
            >
              支付
            </p>
          </div>
        </div>
      </div>
    );
  }
}
