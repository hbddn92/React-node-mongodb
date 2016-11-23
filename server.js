var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var path = require('path');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/bower_components'));
app.use('/js/', express.static(__dirname + '/build/js/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

 mongoose.connect('mongodb://qup1:hieudat23@ds033096.mlab.com:33096/a5guys');
// mongoose.connect('mongodb://localhost/myapp');

    mongoose.connection.on('connected', function () {  
      console.log('Mongoose default connection open to ');
    }); 

    var schema = mongoose.Schema({
         value  :  {type: 'String', required: true, index:true},
         time   :  {type: 'string'},
         day    :  {type: 'string'},
    });


    var itemSchema = mongoose.model('data', schema);

io.on('connection', function (socket) {
   socket.on('getDataServer', function(){
            var getData = [];
            itemSchema.find({}, function(err, data){
                 getData = data.map(function(document){
                    return {
                            value   : document.value,
                            time    : document.time,
                            day     : document.day,
                            id      : document.id
                           }
                })
            socket.emit('gotDataServer', getData);
            });
        })
    socket.on('delete', function(data) {
        console.log(data)
        itemSchema.remove({_id: data}, function(err){
            if (!err) {
                    socket.emit('deleted')
            }
            else {
                    console.log('delete no')
            }
        })
    })
    socket.on('edit', function(data){
        console.log(data.id);
        var dataUpdate = {};
        console.log(data.value)
        if(data.value) {
            dataUpdate.value =  data.value
        };
        if(data.day) {
            dataUpdate.day = data.day
        };
        if(data.time) {
            dataUpdate.time = data.time
        };
         console.log(dataUpdate)
        itemSchema.update({_id: data.id}, dataUpdate, function(err){
            if(!err) {
                socket.emit('edited')
            }
        })
    })
    socket.on('data', function(data){

        var showItemSchema = new itemSchema({
            value : data.value,
            time  : data.time,
            day   : data.day
        });
        showItemSchema.save(function(err,showItemSchema){
                if (err) console.log(err);
                else console.log('Saved: ', data);
            });
    });
        
});
server.listen(process.env.PORT || 4200);  