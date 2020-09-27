import L from "leaflet"
import "leaflet-routing-machine"
import {withLeaflet} from "react-leaflet";
import React from 'react';

// import {GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// const provider = new OpenStreetMapProvider();
// const searchControl = new GeoSearchControl({
//   provider: provider,
// });

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: this.props.map
    }
  }

  componentDidMount() {
    this.createLeafletElement()
    // this.state.map.leafletElement.addControl(searchControl);
  }

  componentDidUpdate(){
    this.setStartpoint()
    this.setEndpoint()
  }

  setEndpoint(){
    const {destination} = this.props
    const destLat = destination.destLat;
    const destLon = destination.destLon;
    console.log("Destlatti ", destLat)
    console.log("Destlonni ", destLon)
    this.leafletElement.spliceWaypoints(1,1, L.latLng(destLat, destLon));
    console.log("getWaypoints ",this.leafletElement.getWaypoints())
    console.log("getPlan ", this.leafletElement.getPlan())

    return this.leafletElement.getPlan()
  }

  setStartpoint(){
    const {position} = this.props
    const lat = position.lat;
    const lon = position.lon;
    console.log("latti ", lat)
    console.log("lonni ", lon)
    this.leafletElement.spliceWaypoints(0,1, L.latLng(lat, lon))
    console.log("getWaypoints ",this.leafletElement.getWaypoints())
    console.log("getPlan ", this.leafletElement.getPlan())

    return this.leafletElement.getPlan()
  }

  createLeafletElement() {
    this.leafletElement = L.Routing.control({
    }).addTo(this.state.map.leafletElement);
    return this.leafletElement.getPlan()
  }

  render() {
    return null
  }
}
export default withLeaflet(Routing);