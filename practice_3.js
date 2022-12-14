var url = require('url')

var adr = 'http://localhost:8080/default.html?year=2017&month=february'
var q = url.parse(adr, true)

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

var qData = q.query
console.log(qData.year)
console.log(qData.month)