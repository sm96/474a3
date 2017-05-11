// After page load
$(function() {
  // Data to visualize (gdp on y, )
 
    // Create an instance of your ParagraphChart, setting the color to blue
    var myChart = pieChart();

    // Select the container div, bind the data (datum) to it,
    // then call your instantiation of the ParagraphChart function
  
    var chartWrapper = d3.select('#my-div')
        .data([{}])
        .call(myChart);
        
});