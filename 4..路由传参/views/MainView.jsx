import React, { Component } from "react";
import Context from "../utils/context";
import "./MainView.css";
import MyButton from "../views/children/MyButton";
import List from "./children/List";
import Alert from "../components/Alert";
import ZfAlert from "../components/ZfAlert";
export default class Main extends Component {
  state = {
    list: [
      {
        id: 1,
        time: "2021/04/25",
        method: "支付宝",
        account: "wx123",
        price: 123,
      },
      {
        id: 2,
        time: "2021/04/22",
        method: "余额",
        account: "wx123",
        price: 233,
      },
      {
        id: 3,
        time: "2021/04/18",
        method: "微信",
        account: "wx123",
        price: 444,
      },
    ],
    timeList: [
      {
        id: 1,
        time: "2021/04/25",
      },
      {
        id: 2,
        time: "2021/04/26",
      },
      {
        id: 3,
        time: "2021/04/27",
      },
      {
        id: 4,
        time: "2021/04/28",
      },
      {
        id: 5,
        time: "2021/04/29",
      },
      {
        id: 6,
        time: "2021/04/30",
      },
      {
        id: 7,
        time: "2021/05/01",
      },
      {
        id: 8,
        time: "2021/05/05",
      },
      {
        id: 9,
        time: "2021/05/03",
      },
    ],
    flag: false,
    flag1: false,
    nowIndex: 1,
    time: "2021/04/25",
  };
  setAlert = () => {
    this.setState({
      flag: true,
    });
  };
  closeAlert = () => {
    this.setState({
      flag: false,
    });
  };
  setTab = (id) => {
    this.setState({
      nowIndex: id,
    });
  };
  setZfAlert = () => {
    this.setState({
      flag1: true,
    });
  };
  closeZfAlert = () => {
    this.setState({
      flag1: false,
    });
  };
  myPush = () => {
    this.state.list.push({
      id: this.state.list.length + 1,
      time: this.state.time,
      method: "支付宝",
      account: "wx123",
      price: 123,
    });
  };
  render() {
    return (
      <div className="main">
        <Context.Provider
          value={{
            ...this.state,
            setAlert: this.setAlert,
            closeAlert: this.closeAlert,
            setTab: this.setTab,
            setZfAlert: this.setZfAlert,
            closeZfAlert: this.closeZfAlert,
            time: this.state.time,
            myPush: this.myPush,
          }}
        >
          <MyButton />
          <List />
          {this.state.flag ? <Alert /> : null}
          {this.state.flag1 ? <ZfAlert /> : null}
        </Context.Provider>
      </div>
    );
  }
}
