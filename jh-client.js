/**
*jh-client.js
*Created by HJH on 2015-05-19 at 21:40

*Modified by HJH on 2015-06-01 at 17:35
*	added user POST data code
*/


var querystring = require('querystring');
var http = require('http');
//var fs = require('fs');

function PostCode() {
  // Build the post string from an object
  var post_data = querystring.stringify({
		device_reg_id : 1234567
  });//user POST data

  // An object of options to indicate where to post to
  var post_options = {
      host: '127.0.0.1',
      port: '8888',
      path: '',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}
(function reqRepeat(i) {
  setTimeout(function () {
    PostCode(''); //http request
    if (--i) reqRepeat(i); //for i is non zero
    }, 5000) //every 5 seconds
})(10); //repeat 10 times

<<<<<<< HEAD
function showObj(obj){
	var str = "";
		for(key in obj){
			str+= key+"="+obj[key]+"\n";
		}


		console.log(str);
		return;
}

(function reqRepeat(i) {
   setTimeout(function () {
		    PostCode(''); //http request
			     if (--i) reqRepeat(i); //for i is non zero
				      }, 5000) //every 5 seconds
	})(10); //repeat 10 times

=======
>>>>>>> origin/master
/*
// This is an async file read
fs.readFile('LinkedList.js', 'utf-8', function (err, data) {
  if (err) {
    // If this were just a small part of the application, you would
    // want to handle this differently, maybe throwing an exception
    // for the caller to handle. Since the file is absolutely essential
    // to the program's functionality, we're going to exit with a fatal
    // error instead.
    console.log("FATAL An error occurred trying to read in the file: " + err);
    process.exit(-2);
  }
  // Make sure there's data before we post it
  if(data) {
    PostCode(data);
  }
  else {
    console.log("No data to post");
    process.exit(-1);
  }
});*/
