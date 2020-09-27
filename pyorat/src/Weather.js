import React from 'react'

export class Weather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weather: '',
      isLoaded: false,
      date: ''
    }
  }

  componentDidMount() {
    var dateNow = new Date();
    dateNow = dateNow.toLocaleString();
    //Receive weather data from Openweather API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
        'Helsinki&units=metric&appid=114332134ea7ed53cb7a0e88a863eb5d' +
        '&lang=fi', {})
        .then(response => response.json())
        .then(json => {
          this.setState({
            weather: json,
            isLoaded: true,
            date: dateNow
          })
          console.log("response ", json)
        })
        .catch(function(err) {
          console.log("Error happened: ", err)
        })
  }

  render() {
    const {isLoaded, weather, date} = this.state
    if (!isLoaded){
      return (
          <p>Lataa säätä</p>
      )
    }
    else  {
      // Round temperatures to 1 decimal
      const temperature = Number((weather.main.temp).toFixed(1));
      const feelsLike = Number((weather.main.feels_like).toFixed(1));

      var sunrise = new Date(1000 * weather.sys.sunrise);
      var sunset = new Date(1000 * weather.sys.sunset);

      var sunriseMinutes, sunsetMinutes;
      var sunriseHours, sunsetHours;

      if (sunrise.getMinutes()<10){
        sunriseMinutes = "0" + sunrise.getMinutes();
      } else{
        sunriseMinutes = sunrise.getMinutes();
      }
      if (sunrise.getHours()<10){
        sunriseHours = "0" + sunrise.getHours();
      } else{
        sunriseHours = sunrise.getHours();
      }
      sunrise = sunriseHours + ":" + sunriseMinutes;

      if (sunset.getMinutes()<10){
        sunsetMinutes = "0" + sunset.getMinutes();
      } else{
        sunsetMinutes = sunset.getMinutes();
      }
      if (sunset.getHours()<10){
        sunsetHours = "0" + sunset.getHours();
      } else{
        sunsetHours = sunset.getHours();
      }
      sunset = sunsetHours + ":" + sunsetMinutes;

      return (
          <div className="weather-box">
            <h3>Sää {weather.name}</h3>
            <img alt="säätilan kuva" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <h2 className="temperature-number">{temperature}°C</h2>
            {weather.weather[0].description}
            <p>{date}</p>
            <table className="weather-table">
              <tbody>
              <tr>
                <th>Tuuli</th><td>{weather.wind.speed} m/s</td>
              </tr>
              <tr>
                <th>tuntuu kuin</th><td>{feelsLike}°C</td>
              </tr>
              <tr>
                <th>Ilmankosteus</th><td>{weather.main.humidity} %</td>
              </tr>
              <tr>
                <th>Pilvisyys</th><td>{weather.clouds.all} %</td>
              </tr>
              <tr>
                <th>Auringonnousu</th><td>{sunrise}</td>
              </tr>
              <tr>
                <th>Auringonlasku</th><td>{sunset}</td>
              </tr>
              </tbody>
            </table>
          </div>
    )
    }
  }
}