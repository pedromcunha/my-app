var request = require('request');
var cheerio = require('cheerio');
//Now ask to be served the webpage
request('http://students.startupinstitute.com/2014/new-york/spring/', function (error, response, html) {
	//Then check to see if theres any errors and print html

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		
		//Set dataArray as a variable for later pushing. Then write a function to target data.
		$('p.lead').each(function(i, element) {
			var a = $(this);
			var name = a.text();
			var imageUrl = a.prev().children().attr('src');
			var scrapeData = {
				name: name,
				image: imageUrl
			};
		
			console.log(scrapeData);
			//Last but not least push it into an array we created earlier.
			// console.log(dataArray);
		});
	}
});

