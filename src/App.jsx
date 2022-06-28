import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sixin from "./pages/Sixin";
import WoDe from "./pages/WoDe";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home" component={Home}></Route>
        <Route path="/wode" component={WoDe}></Route>
        <Route path="/sixin" component={Sixin}></Route>
        <Route path="/" exact component={Login}></Route>

        <footer>
          <Link to="/home">首页</Link>
          <Link to="/sixin">私信</Link>
          <Link to="/wode">我的</Link>
        </footer>
      </div>
    );
  }
}
