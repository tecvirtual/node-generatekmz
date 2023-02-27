var tokmz = require('tokmz');
 
var polygonJson, polygonSymbol, pointJson, pointSymbol, polylineJson, polylineSymbol;
 
// Some codes to load all GeoJsons and symbols
 
var layers = [
    { type: 'folder', name: 'test', content: [
        { type: 'layer', name: 'polygon_layer', features: polygonJson, options: {symbol: polygonSymbol, name: 'Name'} }
    ] },
    { type: 'layer', name: 'point_layer', features: pointJson, options: { symbol: pointSymbol, name: 'Name' } },
    { type: 'layer', name: 'polyline_layer', features: polylineJson, options: { symbol: polylineSymbol, name: 'Name'} }
];
 
tokmz(layers, 'test.kmz', {
    // if necessary
    promiseLib: require('bluebird')
})
.then(function(fileName) {
    console.log('KMZ file is saved at ' + fileName);
})
.catch(function(err) {
    console.error(err);
});