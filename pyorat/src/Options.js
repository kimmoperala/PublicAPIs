import React from 'react'
import {MapView} from './MapView';

const originLat=60.167;
const originLon=24.942;
const originZoom=14;

export class Options extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      value: '',
      lat: originLat,
      lon: originLon,
      zoom: originZoom
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Event handler for selecting the station from the list. Sets the
  handleChange(event) {
    var obj = JSON.parse(event.target.value);
    this.setState({
      value: obj,
      lat: obj.lat,
      lon: obj.lon
    })
  }

  componentDidMount() {
    // Receive data from Digitransit API
    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "query": `{
          bikeRentalStations {
                    stationId
                    name
                    bikesAvailable
                    spacesAvailable
                    lat
                    lon
                    allowDropoff
                    }
        }`
      }),
      json: true
    })
        .then(response => response.json())
        .then(json => {
          this.setState({
            items: json.data.bikeRentalStations,
            isLoaded: true
          })
        });
  }

  render() {
    const {isLoaded, items, value} = this.state;
    if (!isLoaded){
      return <option>Lataa...</option>
    }

    // Bike stop info passed to Mapview
    const stopInfo = [this.state.lat, this.state.lon, this.state.zoom, this.state.value.name, this.state.value.bikesAvailable];

    let teksti;

    // Empty field for starting view
    if (this.state.lat===originLat){
      teksti = <p><br/></p>
    } else {
      teksti = <p>{value.name}, vapaita pyöriä: {value.bikesAvailable},
        vapaita pyöräpaikkoja: {value.spacesAvailable}</p>
    }
    return (
        <>
          <select onChange={this.handleChange}>
            <option selected disabled>Valitse asema</option>
          {items.map(item => (
              <option key={item.name} value={JSON.stringify(item)}>
                {item.name}
              </option>
          ))}
          </select>
          {teksti}
          <MapView info={stopInfo}/>
        </>
    );
  }
}