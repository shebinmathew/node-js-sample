var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
var tabel = [{"free":0.5,1:"no",1.5:"yes","2":"yes"},{"free":1,1:"yes",1.5:"yes","2":"yes"},{"free":1.5,1:"no",1.5:"yes","2":"yes"}];
app.get('/', function(request, response) {
   var x = request.body;
  response.send(x)
})

function goodtimeCheck(sbreak,cfree){
   var breakTime =  sbreak > cfree ?sbreak:cfree;
   var notificationtable = [{"free":0.5,"minbusy":2},{"free":1,"minbusy":4},{"free":1.5,"minbusy":5}]; 
   var hasbeenBusy= 3;
   for( i=0;i<table.length;i++){
       if( breakTime<= notificationtable[i].free){
           console.log(hasbeenBusy>notificationtable[i].minbusy);
           return 'You Need a break!!';
       }
   }
   return 'Fine to work' ;
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
