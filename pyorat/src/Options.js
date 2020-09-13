import React from 'react'

export class Options extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
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
  var {isLoaded, items} = this.state;
  if (!isLoaded){
    return <option>Lataa...</option>
  }
  return (
      <>
      {items.map(item => (
            <option key={item.name}>
              {item.name} pyöriä {item.bikesAvailable} pyöräpaikkoja {item.spacesAvailable} lat {item.lat} lon {item.lon}
            </option>
        ))}
    </>
  );
  }
}