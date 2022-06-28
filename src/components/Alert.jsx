import React, { Component } from "react";
import "./Alert.css";
import Context from "../utils/context";

export default class Alert extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="alert">
        <div className="con">
          <div className="con-con">
            <h2>填写预约资料</h2>
            <div className="d2h">
              <div className="left">
                <h4>
                  微信号<span>*</span>
                </h4>
                <input type="text" />
              </div>
              <div className="right">
                <h4>
                  可接收消息电话<span>*</span>
                </h4>
                <input type="text" />
              </div>
            </div>
            <div className="d3h">
              <h4>性别</h4>
              <div className="radio">
                <label htmlFor="nan">男</label>
                <input type="radio" name="sex" id="nan" />
                <label htmlFor="nv">女</label>
                <input type="radio" name="sex" id="nv" />
              </div>
            </div>
            <div className="d4h">
              <h4>
                选择咨询时间<span>*</span>
              </h4>
              <ul>
                {this.context.timeList.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={
                        this.context.nowIndex === item.id ? "active" : ""
                      }
                      onClick={(e) => {
                        this.context.setTab(item.id);
                        this.context.time = e.target.outerText;
                        console.log(this.context.time);
                      }}
                    >
                      {item.time}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="d5h">
              <h4>温馨提示</h4>
              <p>
                提交付款后60分钟内将由客服电话(平台唯一热线:0000-0000000）联系您确认详细咨询情况后对接给心理咨询医师受理。
              </p>
            </div>
            <div className="d6h">
              <div className="left">
                {" "}
                <input type="checkbox" />
                <p>医心平台资讯保障协议</p>
              </div>
              <div className="right">
                <p className="close" onClick={this.context.closeAlert}>
                  关闭
                </p>
                <p
                  className="ok"
                  onClick={() => {
                    this.context.closeAlert();
                    this.context.setZfAlert();
                  }}
                >
                  确认预约
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
