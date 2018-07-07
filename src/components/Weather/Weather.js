import React, {Component} from 'react'
import Titles from './Titles.js';
import Form from "./Form.js"
import Storm from "./Storm.js"

const API_KEY = "bb10e5c265331dc1306e4e5ecd0126e6";

class Weather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const name = e.target.elements.city.value;
        const country = e.target.elements.country.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${name}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if ( name && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            }) 
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value"
            })
        }
    }
    render(){
        return(
            <div>
                <Titles />
                <Form getWeather={this.state.getWeather}/>
                <Storm 
                temperature={this.state.temperature}
                city={this.state.name}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
            </div>
        )
    }
}

export default Weather;