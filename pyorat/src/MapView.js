import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Routing from "./RoutingMachine";
import {OpenStreetMapProvider } from 'leaflet-geosearch';

const provider = new OpenStreetMapProvider();


export class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMapInit: false,
      destText: "Kirjoita määränpääsi",
      destination: {
        destLat:"60.168",
        destLon:"24.942"
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event){
    console.log(event.target.value)
    this.setState({destText: event.target.value})
  }

  async handleSubmit (event) {
    console.log("lähetetty ", this.state.destText);

    event.preventDefault();

    try {
      const results = await provider.search({query: this.state.destText}).then(results => {
        var xCoord = results[0].x;
        var yCoord = results[0].y;
        this.setState({
              destination: {
                destLat: yCoord,
                destLon: xCoord
              }
            }
        )
        console.log("tulokset: ", results);
        console.log("destLat: ", this.state.destination.destLat);
        console.log("destLon: ", this.state.destination.destLon);
      })
    } catch (error) {
      alert("Jotain meni pieleen. Yritä uutta osoitetta");
    }
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    })
  }


  render() {
    const inputForm =(
        <>
        <p>Minne haluat mennä asemalta? Kirjoita nimi tai osoite</p>
        <form className="destination-form" onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.destText} className="input-box" onChange={this.handleChange}/>
          <button type="submit">Etsi määränpää</button>
        </form>
          </>
        )
    const position = {
      lat: this.props.station.lat,
      lon: this.props.station.lon
    }
    const destination = this.state.destination;
    return(
        <>
          {inputForm}
          <Map center={position} zoom={this.props.zoom} ref={this.saveMap}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>{this.props.station.name}<br />Vapaita pyöriä: {this.props.station.bikesAvailable}</Popup>
      </Marker>
        {this.state.isMapInit && <Routing map={this.map} position={position} destination={destination}/>}
      </Map>
          </>
  )
  }
}