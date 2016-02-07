 var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
 app.get('/', function(request, response) {
   var x = request.body;
 
 goodtimeCheck(1,2)
  
  response.send( goodtimeCheck(1,2))   
})

function goodtimeCheck(sbreak,cfree){
   var breakTime =  sbreak > cfree ?sbreak:cfree;
   var notificationtable = [{"free":0.5,"minbusy":1},{"free":1,"minbusy":1.5},{"free":1.5,"minbusy":2}]; 
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
