var cheerio = require("cheerio");
var request = require("request");

console.log("https://www.indeed.com/");
request("https://www.indeed.com/cmp/BPM-Supreme/jobs/Wordpress-Developer-a533402caa3df3fb?q=backend+developer&vjs=3",function (err, resp, html) {


    var $ = cheerio.load(html);

    var results = [];

    $("b.jobtitle").each(function (i, element) {

        
    var title = $(element).text();

    results.push({
        title: title,
    });
});

console.log(results);
});
