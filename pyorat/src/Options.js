import React from 'react'
import {MapView} from './MapView'
import {Weather} from './Weather'


// Default map view
const originLat=60.168;
const originLon=24.942;
const originZoom=14;

export class Options extends React.Component {

  //items = all the retrieved stations; station = station which is selected
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      station: {
        lat: originLat,
        lon: originLon
      },
      zoom: originZoom
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Event handler for selecting the station from the list
  handleChange(event) {
    var obj = JSON.parse(event.target.value);
    this.setState({
      station: obj
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
    const {isLoaded, items, station} = this.state;
    if (!isLoaded){
      return <option>Lataa...</option>
    }

    let teksti;

    // Empty field for starting view
    if (station.lat===originLat){
      teksti = <p><br/></p>
    } else {
      teksti = <p>{station.name}, vapaita pyöriä: {station.bikesAvailable},
        vapaita pyöräpaikkoja: {station.spacesAvailable}</p>
    }
    return (
        <>
          <select onChange={this.handleChange}>
            <option hidden={true}>Valitse asema</option>
          {items.map(item => (
              <option key={item.stationId} value={JSON.stringify(item)}>
                {item.name}
              </option>
          ))}
          </select>
          {teksti}
          <MapView {...this.state}/>
          <Weather />
        </>
    );
  }
}