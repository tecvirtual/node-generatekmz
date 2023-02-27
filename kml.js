const kml = require('gtran-kml');
 
// Specify promise library if necessary
kml.setPromiseLib(require('bluebird'));
 
// Read KML file

/*kml
  .toGeoJson('source.kml')
  .then((object) => {
    const geojson = object;
  });*/
 
const geojson = {
  'type': 'FeatureCollection',
  'features': [{
    'type': 'Feature',
    'geometry': {"type":"Point","coordinates":[-70.2532459795475,43.6399758607149]},
    'properties': {
      'id': 1,
      'Name': 'test'
    }
  }]
};
 
// Define a symbol for all features in the layer
const pointSymbol = {
  color: '#2dcd86',
  alpha: 255,
  scale: 1,
  icon: 'http://maps.google.com/mapfiles/kml/shapes/square.png'
};
 
// Save geojson into KML file
kml.fromGeoJson(geojson, 'point.kml', {
  symbol: pointSymbol,
  name: 'Name'
})
 
// Define a symbol for each individual feature

/*kml.fromGeoJson(geojson, 'point.kml', {
  symbol: (feature) => {
    return {
      color: '#2dcd86',
      alpha: 255 * Math.random(),
      scale: 1,
      icon: 'http://maps.google.com/mapfiles/kml/shapes/square.png'
    }
  },
  name: 'Name'
})*/