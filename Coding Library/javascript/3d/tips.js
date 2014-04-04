/* How to Make a Scale Variable */
var widthScale = d3.scale.linear()
				.domain([0, 4]) //Set a Domain based on the range of data values
				.range([0, width]); //Set the range (we set a variable for the width)
var color = d3.scale.linear() //
				.domain([0,4])
				.range(["red", "green"]); //You can also use color values for setting a fill as an attr

/*How to make a canvas for SVG */
var canvas = d3.select(".technical") //selection 
								.append("svg") //Adds the svg
								.attr("width", 500) //Width parameters
								.attr("height", 500); //Height parameters

/*Making a shape*/
var circle = canvas.selectAll("circle")
				.data(data)
				.enter()//Binds the data to the circles If no circle exists
					.append("circle")
					.attr("cx", 50)
					.attr("cy", 50)
					.attr("r", 25);
/*If you already have a circle*/
var circle = canvas.append("circle")
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", 25);

/*Transitions*/
circle.transition()
	.delay(2000)//Makes a delay
	.duration(1000) //Changes the amount it takes
	.attr("cx", 150) //Changes the position on an X axis by 150px
	.transition()
	.attr("cy", 200) //Chain transitions
	.transition()
	.attr("cy", 50);

circle.transition()
	.attr("cy", 50) 
	.each("end", function() { //You can also use start instead of end
		d3.select(this).attr("fill", "red"); //"this" stands for this element
	});

/*Arrays In D3 */
var data = [10, 20, 30, 40 , 50];

data.shift(); //Would give us the first value of the array and removes it.
data.sort(d3.descending); //Orders the value highest first
d3.min(data); //Min, use max to the max obviously.
d3.extent(data); //Gives you the highest and lowest.
d3.sum(data); //Adds everything
d3.mean(data); //Gives mean
d3.median(data); //Gives median
d3.shuffle(data); //Mixes the values in the array. Randomly.

/* Creating Path Generators */

var data = [
		{x: 10, y: 20},
		{x: 40, y: 50},
		{x: 30, y: 60}
];
/*Selecting All of a certain object type*/
d3.selectAll("circle"); //Or you can type rect or etc.
d3.select("circle:nth-of-type(1)") //Choose the first type of circle.

/* data in action*/
	var dataArray = [5, 5, 3, 4];
					var canvas = d3.select(".technical")
								.append("svg")
								.attr("width", 500)
								.attr("height", 500);
					var bars = canvas.selectAll("rect")
								.data(dataArray)
								.enter()
									.append("rect")
									.attr("height", function(d){return widthScale(d);})
									.attr("width", 50)
									.attr("x", function(d, i) { return i * 100 })
									.attr("fill", function(d){return color(d) });
/*Pre Written Scales*/
var widthScale = d3.scale.linear()
								.domain([0, 4])
								.range([0, width]);
var color = d3.scale.linear()
			.domain([0,4])
			.range(["red", "green"]);

