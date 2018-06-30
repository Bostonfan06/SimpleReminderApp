import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Tasks from "./Tasks";
import Draw from "./Draw";
import Planner from "./Calendar";
import "./Calendar.css"
import './index.css'
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple Reminders</h1>
          <ul className="header">
            <li><NavLink to="/tasks">Tasks</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/draw">Draw</NavLink></li>
          </ul>
          <div className="content">
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