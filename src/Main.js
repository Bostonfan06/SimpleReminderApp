import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration"
import Home from "./components/Home/Home"
import Tasks from "./components/TasksItems/Tasks";
import Draw from "./components/Draw/Draw";
import SimpleMap from "./components/Map/Map";
import Weather from "./components/Weather/Weather"
import './index.css'
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>SURVIVAL KIT</h1>
          <div className="content">
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/draw" component={Draw}/>
            <Route path="/home" component={Home}/>
            <Route path="/map" component={SimpleMap}/>
            <Route path="/weather" component={Weather}/>
          </div>
        </div>
    </HashRouter>
    );
    
  }
}
 
export default Main;