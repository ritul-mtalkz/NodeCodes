var http = require('http')
var fs = require('fs')

fs.appendFile('file2.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

http.createServer(function(req, res){
    fs.readFile('file.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(8080)