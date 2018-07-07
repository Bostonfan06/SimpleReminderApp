import React, {Component} from 'react'
import './Home.css'
class Home extends Component {

    handleTask = event => {
        event.preventDefault();
        this.props.history.push("./tasks");
      }

    handleMap = event => {
        event.preventDefault();
        this.props.history.push("./map");
      }

    handleCalendar = event => {
        event.preventDefault();
        this.props.history.push("./weather");
      }

    handleDraw = event => {
        event.preventDefault();
        this.props.history.push("./draw");
      }

    render() {
      return (
        <div>
              <button className="tasksbtn" onClick={this.handleTask}>TASKS</button>
              <button className="mapbtn" onClick={this.handleMap}>MAP</button>
              <button className="calendarbtn" onClick={this.handleCalendar}>WEATHER</button>
              <button className="drawbtn" onClick={this.handleDraw}>DRAW</button>
        </div>
      );
      
    }
  }
   
  export default Home;