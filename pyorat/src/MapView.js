import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

export class MapView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zoom: this.props.info[2],
    };
  }

  render() {
    const position = [this.props.info[0], this.props.info[1]];
    return(
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>{this.props.info[3]}<br />Vapaita pyöriä: {this.props.info[4]}</Popup>
      </Marker>
      </Map>
  )
  }
}