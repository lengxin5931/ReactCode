import React, { Component } from "react";
import Header from "./child/Header";
import List from "./child/List";
import Footer from "./child/Footer";
import Context from "../utils/Context";

export default class TodoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: "背单词",
        done: false,
      },
      {
        id: 2,
        name: "运动",
        done: true,
      },
      {
        id: 3,
        name: "吃早餐",
        done: false,
      },
      {
        id: 4,
        name: "去书店",
        done: true,
      },
    ],
  };
  render() {
    return (
      <div className="todo">
        <Context.Provider value={{ ...this.state }}>
          <Header />
          <List />
          <Footer />
        </Context.Provider>
      </div>
    );
  }
}
