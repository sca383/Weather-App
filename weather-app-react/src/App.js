import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [backgroundImage, setBackgroundImage] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=298002a528c8fee63b2766d9ec4b3086`
 // const url1 = `https://api.unsplash.com/photos/random?client_id=jzipXJ58oAvUwTEpKvw8o71FwcBUXvNlgvMxHHBnFGw`

  const searchLocation = (event) =>{
    if (event.key ==='Enter'){
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      })
      setLocation('')
      
      // try{
      //     axios.get(url1).then((response) => {
      //     setBackgroundImage(response.data)
      //     console.log(response.data)
      //     })
      //     const imgURL = response.data.results[0].urls.regular;
      //     setBackgroundImage(imgURL)
      // } catch {
      //   console.error('Error fetching image', error)
      // }
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event=>setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
          />

      </div>

      <div className="container">
        <div className="top">
          <div className="Location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          {data.name != undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                <p className="bold">{data.humidity}</p>
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed.toFixed()} km/h</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }

        </div>
      </div>

    </div>
  );
}

export default App;
