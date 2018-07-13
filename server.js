const express= require('express');
const app = express();
const path= require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 5000);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/binge-app/index.html'));
});
console.log("Server running");