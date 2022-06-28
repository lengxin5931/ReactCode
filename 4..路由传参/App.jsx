import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sixin from "./pages/Sixin";
import WoDe from "./pages/WoDe";

export default class App extends Component {
  state = {
    id: 1,
  };
  render() {
    return (
      <div className="App">
        <Route path="/home" component={Home}></Route>
        <Route path="/sixin/:id" component={Sixin}></Route>
        <Route path="/wode" component={WoDe}></Route>
        {/* <Route path="/" exact component={Login}></Route> */}

        <footer>
          <Link to="/home">首页</Link>
          <Link to={`/sixin/${this.state.id}`}> 私信</Link>
          <li
            onClick={() => {
              this.props.history.push({
                pathname: "/wode",
                search: "?id=1&name=zhangsan",
              });
            }}
          >
            我的
          </li>
        </footer>
      </div>
    );
  }
}
