import React from 'react'
import './Form.css'
const Form = props => (
    <form onSubmit={this.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <button>Get Weather</button>
    <div className="content">
        <h4>LOS ANGELES</h4>
        <p>Location: California</p>
        <h4>Temperature: 101</h4>
        <p>Humidity: 95%</p>
    </div>
    </form>

);

export default Form;

