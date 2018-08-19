// set the margins for the canvas
var margin = {top: 120, right: 60, bottom: 60, left: 100},
    width = 700, // for main characters in main.json
    height = 700; // for main characters in main.json

var x = d3.scale.ordinal().rangeBands([0, width]),
  z = d3.scale.linear().domain([0, 1500]).clamp(true),

  // define the ordinal scale that colors the characters based on houses
  color_scale = d3.scale.ordinal().range([
      "#3b4960",  // The Starks
      "#871212",  // The Targaryens
      "#9b5f00",  // The Baratheons
      "#fffa1c",  // The Lannisters
      "#000000",  // The Night's Watch
      "#E32017",  // The Dothraki
      "#003688",  // The Greyjoy
      "#00782A",  // The Tyrells
      "#ff8c00",  // The Martells
      "#F3A9BB",  // The Freys
      "#0098D4",  // The Tullies
      "#95CDBA",  // The Wildlings    
      ]);

var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("margin-left", margin.left + "px")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../../data/matrix/main_final.json", function(main_json) {

    // create a matrix to store the character-character number of occurrences
    // row and columns represents characters and the entries in the matrix will
    // represent the count of the scenes those characters experienced together
    var matrix = [],
    nodes = main_json.nodes,

    // number of nodes
    // each node is a character
    n = nodes.length;

    // store the index of each node
    nodes.forEach(function(node, i) {
        node.index = i;
        node.count = 0;
        // create a row for each node in the matrix
        matrix[i] = d3.range(n).map(function(j) { return {x: j, y: i, z: 0}; });
    });

    // use the edge values to count the interactions between different characters
    // also store the total interactions for every character
    main_json.edges.forEach(function(edge) {
        matrix[edge.source][edge.target].z += edge.value;
        matrix[edge.target][edge.source].z += edge.value;
        matrix[edge.source][edge.source].z += 0;
        matrix[edge.target][edge.target].z += 0;
        nodes[edge.source].count += edge.value;
        nodes[edge.target].count += edge.value;
    });

    var values = matrix.map(function(elt) { return Math.max.apply(Math,elt.map(function(o){return o.z;})); });

    // Define the orders in which the users will be allowed to sort the matrix
    var orders = {
        // alphabetical order by name
        name: d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); }),
        // order by the total interactions per character
        count: d3.range(n).sort(function(a, b) { return nodes[b].count - nodes[a].count; }),
        // order by the house in which the characters belong
        house: d3.range(n).sort(function(a, b) { return nodes[a].house - nodes[b].house; })
    };

    // set the default order to be the alphabetical order
    x.domain(orders.name);

    // setting up the matrix
    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height);

    // setting up the rows
    var row = svg.selectAll(".row")
        .data(matrix)
        .enter().append("g")
        .attr("class", "row")
        .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
        .each(row);

    row.append("line")
        .attr("x2", width);

    row.append("text")
        .attr("x", -6)
        .attr("y", x.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function(d, i) { return nodes[i].name; });

    // setting up the columns
    var column = svg.selectAll(".column")
        .data(matrix)
        .enter().append("g")
        .attr("class", "column")
        .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });

    column.append("line")
        .attr("x1", -width);

    column.append("text")
        .attr("x", 6)
        .attr("y", x.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "start")
        .text(function(d, i) { return nodes[i].name; });

    function row(row) {
      var cell = d3.select(this).selectAll(".cell")
          .data(row.filter(function(d) { return d.z; }))
          .enter().append("rect")
          .attr("class", "cell")
          .attr("x", function(d) { return x(d.x); })
          .attr("width", x.rangeBand())
          .attr("height", x.rangeBand())
          .style("fill-opacity", function(d) { return z(d.z); }) // the opacity will be equal to the count of occurrences
          .style("fill", function(d) { return nodes[d.x].house == nodes[d.y].house ? color_scale(nodes[d.x].house) : "#adadad"; })
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
    }

    function mouseover(p) {
        d3.selectAll(".row text").classed("active", function(d, i) { return i == p.y; });
        d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x; });
    }

    function mouseout() {
        d3.selectAll("text").classed("active", false);
    }

    function order(value) {
        x.domain(orders[value]);

        var t = svg.transition().duration(2500);

        t.selectAll(".row")
        .delay(function(d, i) { return x(i) * 4; })
        .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
        .selectAll(".cell")
        .delay(function(d) { return x(d.x) * 4; })
        .attr("x", function(d) { return x(d.x); });

        t.selectAll(".column")
        .delay(function(d, i) { return x(i) * 4; })
        .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });
    }   

    // re-order the matrix based on the selected value of the radio button
    d3.select("#sort-by").on("change", function() {
        clearTimeout(timeout);

        for (var i = 0, length = this.length; i < length; i++)
        {
         if (this[i].checked)
         {
          // do whatever you want with the checked radio
          console.log(this[i].value);
          order(this[i].value);

          // only one radio can be logically checked, don't check the rest
          break;
         }
        }
    });

    var timeout = setTimeout(function() {
        order("house");
    }, 500);

});