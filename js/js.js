


require(["esri/map","esri/arcgis/utils","esri/dijit/OverviewMap","esri/dijit/LayerList","esri/dijit/Legend","esri/dijit/Search","esri/layers/FeatureLayer","dojo/domReady!"], function(Map,arcgisUtils,OverviewMap,LayerList,Legend,Search,FeatureLayer) {





var miMapa;

var id ="f92ab37c834b4ed3bdef2f8b680114ca";
arcgisUtils.createMap(id,"mapaCont").then(funcionRespuesta);


function funcionRespuesta(laRespuesta){
  miMapa = laRespuesta.map;

var layers = arcgisUtils.getLayerList (laRespuesta);


  var options = {
    map: miMapa,
    layers: layers,
    showLegend: true,
    showSubLayers: true,
    showOpacitySlider : true

  };




  /*var lList = new LayerList(options, "menuIzqCont");
  lList.startup();*/



var params = {
    map: miMapa,
    attachTo: "bottom-right"

  };


  var miwidgetOverviewMap = new OverviewMap(params);

  miwidgetOverviewMap.startup();





  var layerInfos = arcgisUtils.getLegendLayers(laRespuesta);


  var params = {
          map: miMapa,
          layerInfos: layerInfos
        };

        var legend = new Legend(params, "menuIzqCont");
        legend.startup();



var source = [{
    featureLayer: new FeatureLayer("http://services1.arcgis.com/MPSkeshhtFz9vjCL/ArcGIS/rest/services/Metro/FeatureServer/0"),
    searchFields: ["ESTACION"],
    suggestionTemplate: "${ESTACION}, Lineas: ${LINEAS}",
    exactMatch: false,
    outFields: ["*"],
    name: "Metro Madrid",
    placeholder: "Nombre de estación de metro",
    maxResults: 6,
    maxSuggestions: 6,
    enableSuggestions: true,
    minCharacters: 0,
    localSearchOptions: {distance: 5000}
  }];







var options = {
  map: miMapa,
  sources: source

};


        var search = new Search(options, "search");
        search.startup();

















  };









});
