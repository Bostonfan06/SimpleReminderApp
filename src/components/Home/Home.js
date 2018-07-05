import React, {Component} from 'react'
import './Home.css'
class Home extends Component {

    handleTask = event => {
        event.preventDefault();
        this.props.history.push("./tasks");
      }

    handleWeather = event => {
        event.preventDefault();
        this.props.history.push("./weather");
      }

    handleCalendar = event => {
        event.preventDefault();
        this.props.history.push("./calendar");
      }

    handleDraw = event => {
        event.preventDefault();
        this.props.history.push("./draw");
      }

    render() {
      return (
        <div>
              <button onClick={this.handleTask}>TASKS</button>
              <button onClick={this.handleWeather}>WEATHER</button>
              <button onClick={this.handleCalendar}>CALENDAR</button>
              <button onClick={this.handleDraw}>DRAW</button>
        
        </div>
      );
      
    }
  }
   
  export default Home;