import React from 'react'
import ReactDOM from 'react-dom'
import Parser from 'html-react-parser'

const request = require('request')

function GetBikeStations() {
  request(req, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var stations = [];
      stations = body.data.bikeRentalStations;
      console.log("koko:" + stations.length);

      var out = "";

      for (var i = 0; i < stations.length; i++) {
        out += '<tr>'
        out += '<td>' + stations[i].name + '</td>' +
            '<td>' + stations[i].bikesAvailable + '</td>' +
            '<td>' + stations[i].spacesAvailable + '</td>'
        out += '</tr>'
      }
      out = Parser(out);

      ReactDOM.render(
          out,
          document.getElementById('asemat')
      )
    } else {
      console.log("Ei yhteyttä!");
    }
  });
}

const req = {
  url:
      'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: {
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
  },
  json: true
};

const App = () => {
  GetBikeStations();
  return (
      <>
        <h1>Polkupyöräasemat</h1>
        <table><
          thead>
           <tr>
            <th>Nimi</th>
             <th>Vapaita pyöriä</th>
            <th>Vapaita pyöräpaikkoja</th>
          </tr>
        </thead>
          <tbody id='asemat'>
            </tbody>
        </table></>
  )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
