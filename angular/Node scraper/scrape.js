var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
//Now ask to be served the webpage
request('http://students.startupinstitute.com/2014/new-york/spring/', function (error, response, html) {
	//Then check to see if theres any errors and print html

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		var dataArray = [];
		
		//Set dataArray as a variable for later pushing. Then write a function to target data.
		$('p.lead').each(function(i, element) {
			var a = $(this);
			var name = a.text();
			var imageUrl = a.prev().children().attr('src');
			var scrapeData = {
				name: name,
				image: imageUrl
			};
			dataArray.push(scrapeData);
			console.log(dataArray);
			// Last but not least push it into an array we created earlier.
			// Now push that log into a json file, I hope this works. It didn't work, dammit.
			var toFile = 'temp/students.xml';
			fs.writeFile(toFile, JSON.stringify( dataArray ), "utf8", function(err){
				if(err) {
					console.log(err)
				}	else {
					console.log("JSON save to" + toFile)
				}

			});

		});
	}
});

