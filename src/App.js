/**
 * TODO: check for city and temperature when conditionally rendering
 * make the app look 🚳 dispaly other weather data you find usefull
 * 
 */
import { useState } from 'react';
import './App.css';
import axios from './axios';

const APIkey = 'f6e65c92c90cacc50feba18db079365a'

function App() {
  const [city, setCity] = useState('');
  const [temperature, settemperature] = useState(null)

  const getWeather = async () => {
    const response = await axios.get(`/weather?q=${city}&appid=${APIkey}&units=metric`)

    settemperature(response.data.main.temp)

  }


  return (
    <div className="App">
      {
        temperature && (`Hello ${city} the temperature is ${temperature}`)
      }
      <h1>Hello World</h1>
      <input
        placeholder={'Type the city name'}
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <button onClick={() => getWeather()}>Get Weather</button>
    </div>
  );
}

export default App;
