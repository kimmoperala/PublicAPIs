(this.webpackJsonppyorat=this.webpackJsonppyorat||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(12),s=a.n(i),o=a(7),r=a(8),u=a(11),c=a(10),m=a(9),p=a(17),h=a.n(p),d=a(19),g=a(37),E=a(38),f=a(36),b=a(39),v=a(1),y=a.n(v),k=(a(29),a(6)),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={map:n.props.map},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.createLeafletElement()}},{key:"componentDidUpdate",value:function(){this.setStartpoint(),this.setEndpoint()}},{key:"setEndpoint",value:function(){var e=this.props.destination,t=e.destLat,a=e.destLon;return console.log("Destlatti ",t),console.log("Destlonni ",a),this.leafletElement.spliceWaypoints(1,1,y.a.latLng(t,a)),console.log("getWaypoints ",this.leafletElement.getWaypoints()),console.log("getPlan ",this.leafletElement.getPlan()),this.leafletElement.getPlan()}},{key:"setStartpoint",value:function(){var e=this.props.position,t=e.lat,a=e.lon;return console.log("latti ",t),console.log("lonni ",a),this.leafletElement.spliceWaypoints(0,1,y.a.latLng(t,a)),console.log("getWaypoints ",this.leafletElement.getWaypoints()),console.log("getPlan ",this.leafletElement.getPlan()),this.leafletElement.getPlan()}},{key:"createLeafletElement",value:function(){return console.log("Eka!"),this.leafletElement=y.a.Routing.control({}).addTo(this.state.map.leafletElement),this.leafletElement.getPlan()}},{key:"render",value:function(){return null}}]),a}(l.a.Component),O=Object(k.b)(j),L=new(a(21).a),S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).saveMap=function(e){n.map=e,n.setState({isMapInit:!0})},n.state={isMapInit:!1,destText:"Kirjoita m\xe4\xe4r\xe4np\xe4\xe4si",destination:{destLat:"60.168",destLon:"24.942"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){console.log(e.target.value),this.setState({destText:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("l\xe4hetetty ",this.state.destText),t.preventDefault(),e.prev=2,e.next=5,L.search({query:this.state.destText}).then((function(e){var t=e[0].x,n=e[0].y;a.setState({destination:{destLat:n,destLon:t}}),console.log("tulokset: ",e),console.log("destLat: ",a.state.destination.destLat),console.log("destLon: ",a.state.destination.destLon)}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Jotain meni pieleen. Yrit\xe4 uutta osoitetta");case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Minne haluat menn\xe4 asemalta? Kirjoita nimi tai osoite"),l.a.createElement("form",{className:"destination-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.destText,className:"input-box",onChange:this.handleChange}),l.a.createElement("button",{type:"submit"},"Etsi m\xe4\xe4r\xe4np\xe4\xe4"))),t={lat:this.props.station.lat,lon:this.props.station.lon},a=this.state.destination;return l.a.createElement(l.a.Fragment,null,e,l.a.createElement(g.a,{center:t,zoom:this.props.zoom,ref:this.saveMap},l.a.createElement(E.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(f.a,{position:t},l.a.createElement(b.a,null,this.props.station.name,l.a.createElement("br",null),"Vapaita py\xf6ri\xe4: ",this.props.station.bikesAvailable)),this.state.isMapInit&&l.a.createElement(O,{map:this.map,position:t,destination:a})))}}]),a}(l.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={weather:"",isLoaded:!1,date:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date;t=t.toLocaleString(),fetch("https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=114332134ea7ed53cb7a0e88a863eb5d&lang=fi",{}).then((function(e){return e.json()})).then((function(a){e.setState({weather:a,isLoaded:!0,date:t}),console.log("response ",a)})).catch((function(e){console.log("Error happened: ",e)}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.weather,n=e.date;if(t){var i,s,o,r,u=Number(a.main.temp.toFixed(1)),c=Number(a.main.feels_like.toFixed(1)),m=new Date(1e3*a.sys.sunrise),p=new Date(1e3*a.sys.sunset);return i=m.getMinutes()<10?"0"+m.getMinutes():m.getMinutes(),o=m.getHours()<10?"0"+m.getHours():m.getHours(),m=o+":"+i,s=p.getMinutes()<10?"0"+p.getMinutes():p.getMinutes(),r=p.getHours()<10?"0"+p.getHours():p.getHours(),p=r+":"+s,l.a.createElement("div",{className:"weather-box"},l.a.createElement("h3",null,"S\xe4\xe4 ",a.name),l.a.createElement("img",{alt:"s\xe4\xe4tilan kuva",src:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png")}),l.a.createElement("h2",{className:"temperature-number"},u,"\xb0C"),a.weather[0].description,l.a.createElement("p",null,n),l.a.createElement("table",{className:"weather-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Tuuli"),l.a.createElement("td",null,a.wind.speed," m/s")),l.a.createElement("tr",null,l.a.createElement("th",null,"tuntuu kuin"),l.a.createElement("td",null,c,"\xb0C")),l.a.createElement("tr",null,l.a.createElement("th",null,"Ilmankosteus"),l.a.createElement("td",null,a.main.humidity," %")),l.a.createElement("tr",null,l.a.createElement("th",null,"Pilvisyys"),l.a.createElement("td",null,a.clouds.all," %")),l.a.createElement("tr",null,l.a.createElement("th",null,"Auringonnousu"),l.a.createElement("td",null,m)),l.a.createElement("tr",null,l.a.createElement("th",null,"Auringonlasku"),l.a.createElement("td",null,p)))))}return l.a.createElement("p",null,"Lataa s\xe4\xe4t\xe4")}}]),a}(l.a.Component),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[],isLoaded:!1,station:{lat:60.168,lon:24.942},zoom:14},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=JSON.parse(e.target.value);this.setState({station:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"{\n          bikeRentalStations {\n                    stationId\n                    name\n                    bikesAvailable\n                    spacesAvailable\n                    lat\n                    lon\n                    allowDropoff\n                    }\n        }"}),json:!0}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data.bikeRentalStations,isLoaded:!0})}))}},{key:"render",value:function(){var e,t=this.state,a=t.isLoaded,n=t.items,i=t.station;return a?(e=60.168===i.lat?l.a.createElement("p",null,l.a.createElement("br",null)):l.a.createElement("p",null,i.name,", vapaita py\xf6ri\xe4: ",i.bikesAvailable,", vapaita py\xf6r\xe4paikkoja: ",i.spacesAvailable),l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:this.handleChange},l.a.createElement("option",{hidden:!0},"Valitse asema"),n.map((function(e){return l.a.createElement("option",{key:e.stationId,value:JSON.stringify(e)},e.name)}))),e,l.a.createElement(S,this.state),l.a.createElement(w,null))):l.a.createElement("option",null,"Lataa...")}}]),a}(l.a.Component),C=(a(34),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"PK-seudun polkupy\xf6r\xe4asemat"),l.a.createElement(x,null))});s.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fe59aea9.chunk.js.map