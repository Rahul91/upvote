import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import UserLogin from "./views/UserLogin";
import AdminLogin from "./views/AdminLogin";


class Root extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={UserLogin} />
            <Route exact path="/admin" component={AdminLogin} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Root;
