import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./components/Login/Login";
import Tasks from "./components/TasksItems/Tasks";
import Draw from "./components/Draw/Draw";
import Planner from "./components/Calendar/Calendar";
import './index.css'
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>SURVIVAL KIT</h1>
          <ul className="header">
            <button><NavLink to="/login">LOGIN</NavLink></button>
            <button><NavLink to="/tasks">MY BACKPACK</NavLink></button>
            <button><NavLink to="/calendar">CALENDAR</NavLink></button>
            <button><NavLink to="/draw">Draw</NavLink></button>
          </ul>
          <div className="content">
            <Route path="/login" component={Login}/>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/calendar" component={Planner}/>
            <Route path="/draw" component={Draw}/>
          </div>
        </div>
    </HashRouter>
    );
    
  }
}
 
export default Main;