function pieChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = 600,
      height = 600,
      colors = ["red", "orange", "salmon", "powderblue", "green", "blue", "purple", "gray"],
      xValue = function(d) { return d[0]; },
      yValue = function(d) { return d[1]; };


  var svg = d3.select("svg");
  var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  function chart(selection) {
    var radius = Math.min(width, height) / 2;
    selection.each(function(data) {
      var pie = d3.pie()
          .sort(null)
          .value(function(d) { return d[Object.keys(d)[2]]; });

      var path = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

      var label = d3.arc()
          .outerRadius(radius - 50)
          .innerRadius(radius - 40);
      
      d3.csv('data.csv', function(d) {
        d[1] = +d[1];
        return d;
      }, function(error, data) {
        if (error) throw error;
      
        var arc = g.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d, i) { return colors[i]; });

        arc.append("text")
            .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
            .attr("dy", "0.4em")
            .text(function(d) { return d.data[Object.keys(d.data)[1]]; });
      });      
    });   
  }; 
  chart.x = function(xVal) {
    if (!arguments.length) return xValue;
    xValue = xVal;
    return chart;
  };
  chart.y = function(yVal) {
    if (!arguments.length) return yValue;
    yValue = yVal;
    return chart;
  };

  chart.width = function(w){
    if (!arguments.length) return width;
    width = w;
    radius = Math.min(width, height) / 2;
    return chart;
  };

  chart.height = function(h){
    if (!arguments.length) return height;
    height = h;
    radius = Math.min(width, height) / 2;
    return chart;
  };

  chart.margin = function(m) {
    if (!arguments.length) return margin;
    margin = m;
    return chart;
  }

  chart.colors = function(c) {
    if (!arguments.length) return colors;
    colors = c;
    return chart;
  }

  return chart;

};