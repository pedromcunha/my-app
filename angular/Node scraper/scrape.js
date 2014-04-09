var request = require('request');
var cheerio = require('cheerio');
//Now ask to be served the webpage
request('http://students.startupinstitute.com/2014/new-york/spring/', function (error, response, html) {
	//Great check to see if theres any errors and print html

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		var dataArray = [];
		//Load that into a variable called money. Loop it so that it parses the data for a label
		$('p.lead').each(function(i, element) {
			var a = $(this);
			var name = a.text();
			var imageUrl = a.prev().children().attr('src');
			var scrapeData = {
				name: name,
				image: imageUrl
			};
			dataArray.push(scrapeData);
			//Last but not least push it into an array we created earlier.
			console.log(dataArray);
		});
	}
});

