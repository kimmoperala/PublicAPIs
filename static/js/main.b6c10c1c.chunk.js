(this.webpackJsonppyorat=this.webpackJsonppyorat||[]).push([[0],{185:function(t,n,e){t.exports=e(186)},186:function(t,n,e){"use strict";e.r(n);var a=e(13),l=e.n(a),o=e(98),i=e.n(o),r=e(184),c=e.n(r),u=e(202);var s={url:"https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",method:"POST",headers:{"Content-Type":"application/json"},body:{query:"{\n      bikeRentalStations {\n                stationId\n                name\n                bikesAvailable\n                spacesAvailable\n                lat\n                lon\n                allowDropoff\n                }\n    }"},json:!0},f=function(){return u(s,(function(t,n,e){if(t||200!==n.statusCode)console.log("Ei yhteytt\xe4!");else{var a;a=e.data.bikeRentalStations,console.log("koko:"+a.length);for(var l="",o=0;o<a.length;o++)l+="<tr>",l+="<td>"+a[o].name+"</td><td>"+a[o].bikesAvailable+"</td><td>"+a[o].spacesAvailable+"</td>",l+="</tr>";l=c()(l),i.a.render(l,document.getElementById("asemat"))}})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Polkupy\xf6r\xe4asemat"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nimi"),l.a.createElement("th",null,"Vapaita py\xf6ri\xe4"),l.a.createElement("th",null,"Vapaita py\xf6r\xe4paikkoja"))),l.a.createElement("tbody",{id:"asemat"})))};i.a.render(l.a.createElement(f,null),document.getElementById("root"))},218:function(t,n){},220:function(t,n){},230:function(t,n){},232:function(t,n){},257:function(t,n){},259:function(t,n){},260:function(t,n){},266:function(t,n){},268:function(t,n){},286:function(t,n){},288:function(t,n){},300:function(t,n){},303:function(t,n){},308:function(t,n){},310:function(t,n){},333:function(t,n){}},[[185,1,2]]]);
//# sourceMappingURL=main.b6c10c1c.chunk.js.map