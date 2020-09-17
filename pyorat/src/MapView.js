import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

export class MapView extends React.Component {

  render() {
    const position = [this.props.station.lat, this.props.station.lon];
    return(
      <Map center={position} zoom={this.props.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>{this.props.station.name}<br />Vapaita pyöriä: {this.props.station.bikesAvailable}</Popup>
      </Marker>
      </Map>
  )
  }
}