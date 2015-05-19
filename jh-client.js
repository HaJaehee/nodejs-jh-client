/**
*jh-client.js
*Created by HJH on 2015-05-19 at 21:40
*/


var querystring = require('querystring');
var http = require('http');
//var fs = require('fs');

function PostCode(codestring) {
  // Build the post string from an object
  var post_data = querystring.stringify({
      'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
      'warning_level' : 'QUIET',
      'js_code' : codestring
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: '192.168.198.128',
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
