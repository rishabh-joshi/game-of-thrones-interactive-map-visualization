function main(){
  // declare map, query & style
  const map = L.map('map').setView([7, 20], 5); 
  const linesQuery = $('#lines-query').text(); 
  const linesStyle = $('#lines-style').text();
  const pointsQuery = $('#points-query').text(); 
  const pointsStyle = $('#points-style').text();
  const labelsQuery = $('#labels-query').text(); 
  const labelsStyle = $('#labels-style').text();

  // create season selector
  const seasonSelector = $("#season-selector");
    seasonSelector.slider({
        range: true,
        min: 1,
        max: 7,
        step: 1,
        values: [ 1, 3 ],
        classes: {
          "ui-slider": "slider-bar",
                "ui-slider-handle": "slider-handle",
                "ui-slider-range": "slider-range"
        },
        labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      });
      
      const labels =  $('#season-selector').data().uiSlider.options.labels
      for (var label of labels) {
        const el = $('<label>').addClass('season-label').text(label);
        $( "#season-labels" ).append(el);
      }


  // add dark GoT basemap
  L.tileLayer('https://cartocdn-ashbu.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_d44e8b0f_a525_4d23_b93a_71aba54674bc/all/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);

  map.removeControl(map.zoomControl);

  // create CARTO client
  const client = new carto.Client({
    apiKey: 'cillasIñigoRamiro',
    username: 'ramirocartodb'
  });

  // create a source, style & lines layer
  const linesSource = new carto.source.SQL(linesQuery);
  const linesCartoCSS = new carto.style.CartoCSS(linesStyle);
  const linesLayer = new carto.layer.Layer(linesSource, linesCartoCSS, {
    featureOverColumns: ['character', 'distance']
    });

  // create a source, style & labels layer
  const labelsSource = new carto.source.SQL(labelsQuery);
  const labelsCartoCSS = new carto.style.CartoCSS(labelsStyle);
  const labelsLayer = new carto.layer.Layer(labelsSource, labelsCartoCSS);

  // create a source, style & points layer
  // GoT emojis source: https://downloademoji.com/game-of-thrones/
  const pointsSource = new carto.source.SQL(pointsQuery);
  const pointsCartoCSS = new carto.style.CartoCSS(pointsStyle);
  const pointsLayer = new carto.layer.Layer(pointsSource, pointsCartoCSS);

  // add layers to the client
  client.addLayers([linesLayer, labelsLayer, pointsLayer]);

  // add the client layer to the map
  client.getLeafletLayer().addTo(map);

  // add popup
  const popup = L.popup({ closeButton: false });
    linesLayer.on('featureOver', function (featureEvent) {
        popup.setLatLng(featureEvent.latLng);
        const name = featureEvent.data.character;
        const dist = featureEvent.data.distance.toFixed(0);
        popup.setContent(`
            <h2 style="font-size: 14px; font-family: 'MedievalSharp', sans-serif;"> ${name} </h2>
            <p style="font-size: 10px; font-family: 'MedievalSharp', sans-serif;"> ${dist} Km</p>
          `);
        popup.openOn(map);
        console.log(featureEvent.data, featureEvent.distance);
    });

    linesLayer.on('featureOut', function (featureEvent) {
        popup.removeFrom(map);
    });

  // add character data view
  const charCategory = new carto.dataview.Category(
    linesSource, 'character', {
      limit: 16,
      operation: carto.operation.SUM,
      operationColumn: 'distance'
    });

  const names = [], distances = [];

    charCategory.on('dataChanged', function (newData) {
        console.log('---Distance by character---');
        names.length = 0;
        distances.length = 0;
        for (category of newData.categories){
            names.push(category.name);
            distances.push(category.value);
            console.log(category.name, category.value);
        }
        const topBackgrounds = [];

        // assign color to character name
        for (const name of names) {
            if (name =="Theon") {
                topBackgrounds.push("#F2B701");
            }
            else if (name =="Eddard" || name =="Bran" || name =="Arya" || name =="Sansa" || name =="Jon" || name =="Robb") {
                topBackgrounds.push("#88CCEE");
            }
            else if (name =="Jaime" || name =="Cersei" || name =="Tyrion") {
                topBackgrounds.push("#882255");
            }
            else if (name == "Sam") {
                topBackgrounds.push("#661100");
            }
            else if (name == "Brienne") {
                topBackgrounds.push("#332288");
            }
            else if (name == "Davos") {
                topBackgrounds.push("#888888");
            }
            else if (name == "Daenerys") {
                topBackgrounds.push("#DDCC77");
            }
            else {topBackgrounds.push("#117733");
            }
        }

        // add bar chart widget
        const widget = document.getElementById("chart").getContext("2d");

        const chartOptions = {
            legend: {
                display:false,
            },
            title: {
                display: true,
                text: 'Distance in Kms',
                position: 'bottom',
            },
            scales: {
            yAxes: [{
              barPercentage: 0.2,
              gridLines: {
                    display: false,
              }
            }],
            xAxes: [{
              barPercentage: 0.2,
              gridLines: {
                    display: false,
              }   
            }]
            },
            elements: {
            rectangle: {
              borderSkipped: 'left',
            }
            }
        };

        Chart.defaults.global.defaultFontFamily = "'MedievalSharp', sans-serif";
        Chart.defaults.global.defaultFontSize = 14;

        const myChart = new Chart(widget, {
          type: 'horizontalBar',
          data: {
          labels: names,
          datasets: [{
              label: '',
              data: distances,
              backgroundColor: topBackgrounds,
              borderWidth: 0
            }]
        },
        options: chartOptions
      });

        console.log(names);

    });

  client.addDataview(charCategory);

  // add bbox filters
  const bboxFilter = new carto.filter.BoundingBoxLeaflet(map);
  charCategory.addFilter(bboxFilter);

  /* Slider on change */
  // filter query when selecting season range
  seasonSelector.on("slidechange", function( event, ui ) {
      let seasons = seasonSelector.slider( "values" );
      let rangeSeasons = Array.apply(null, {length: (seasons[1]-seasons[0]+1)}).map(function(value, index){
        return index + seasons[0];
      });
      filterSeason(rangeSeasons); 
      console.log(rangeSeasons);
  });

  const filterSeason = function (season) {
    let filterLinesQuery = linesQuery;
    let filterPointsQuery = pointsQuery;
    if (season) {
      filterLinesQuery = `      
          select 
              row_number() over() as cartodb_id, 
              array_agg(distinct season) as seasons,
              max(color) as color,
              st_makeline(the_geom order by cartodb_id asc) as the_geom, 
              st_length(st_makeline(the_geom order by cartodb_id asc)::geography)*0.138980150292748/1000 as distance,
              st_transform(st_makeline(the_geom order by cartodb_id asc), 3857) as the_geom_webmercator,
              max(house) as house,
              character
          from 
              episodes_locations 
          where season in (${season})
          group by 
              character`;
      filterPointsQuery = `      
          select 
              row_number() over() as cartodb_id, 
              array_agg(distinct season) as seasons,
              max(color) as color,
              st_endpoint(st_makeline(the_geom order by cartodb_id asc)) as the_geom, 
              st_transform(st_endpoint(st_makeline(the_geom order by cartodb_id asc)), 3857) as the_geom_webmercator,
              max(house) as house,
              character
          from 
              episodes_locations 
          where season in (${season})
          group by 
              character`;
    }
    linesSource.setQuery(filterLinesQuery);
    pointsSource.setQuery(filterPointsQuery);
  };

}
window.load = main();