var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  
 return ( request+ '  '+ respnse)
  
})


function checkbusy(){
   
   
   return 1;
}


var foo = function (time1,time2) {
  return ('foo');
}
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
