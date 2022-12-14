var http = require('http')
var formidable = require('formidable')
var fs = require('fs')
var mv = require('mv')

http.createServer(function (req, res) {
  if (req.url == '/fileUpload') {
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath
      var newpath = 'D:/Mtalkz/Projects/NodePractice/' + files.filetoupload.originalFilename
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      })
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end()
  }
}).listen(8080)
