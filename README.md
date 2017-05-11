# 474 a3 software design

## Hello, Welcome.  

This API provides you to build a pie chart more easily. All you need is your data which has one column for category and one column for corresponding numerical values. This software will create a pie chart with colored categories and their sizes will follow the values in numerical column.  
<br /> 
When using, just follow the following format where d[0] equals categories and d[1] equals numerical values. <i>Also please name your data as "data.csv"</i>
<pre><code>      
	var chart = pieChart()
      .x(function(d) { return +d[0]; })
      .y(function(d) { return +d[1]; });

	d3.csv("data.csv", function(data) {
	    d3.select("#vis")
	        .datum(data)
	        .call(chart);
	});

</code></pre>
By doing this you will be able to create a simple pie chart. If you would like to change some features, you can use the following methods:
<ul>
	<li>Changing x values(categorical): chart.x(categories)</li>
	<li>Changing y values(numerical): chart.y(numbers)</li>
	<li>Changing the width: chart.width(w)</li>
	<li>Changing the height: chart.height(h)</li>
	<li>Changing the margins: chart.margin(m)</li>
	<li>Changing colors: chart.colors(c)</li>
</ul>

To give you an example of those methods, please see below.
<pre><code>      
	var chart = pieChart().height(650); // changes height to 650.
	
</code></pre>

<i>Width</i> and <i>height</i> accept a single integer, <i>x</i> and <i>y</i> accept sets of categories or numbers, <i>margin</i> accepts an object with margins, and <i>colors</i> accept a list of colors.

If you have any other questions, please let me know. Thank you.