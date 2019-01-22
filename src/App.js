import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import From from './components/From';
import Weather from './components/Weather';

const API_KEY = "e235ad1a0d40989f8fe9e1b1f0c512bf";

class App extends Component {
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
  }


  getWather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api_call = await fetch('https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}');
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature:data.main.temp,
      humidity : data.main.humidity,
      city : data.name,
      country : data.sys.country,
      description : data.weather[0].description,
      error :''
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <From getWather={this.getWather} />
        <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}   
          />
      </div>
    );
  }
}

export default App;
