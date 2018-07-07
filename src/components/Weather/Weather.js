import React, {Component} from 'react'
import Titles from './Titles.js';
import Form from "./Form.js"
import Storm from "./Storm.js"


class Weather extends Component {
    state = {
        temperature: undefined,
        id: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=c1e8cb3480bf557eada19288936711ee`);
        const data = await api_call.json();
        if (name){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                id: data.id,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            }) 
        } else {
            this.setState({
                temperature: undefined,
                id: undefined,
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
                city={this.state.id}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
            </div>
        )
    }
}

export default Weather;