var AppDispatcher = require("./dispatcher");
var io            = require('socket.io-client');
var socket = io.connect('https://a5start.herokuapp.com/');
//var socket = io.connect('http://localhost:4200');

var AddList = {
    getDataServer: function() {
        socket.on('connect', function(){
            console.log('connecteddddddddddd')
        });
        socket.on('disconnect', function(){
            console.log('disconnectdisconnect')
        });
        socket.emit('getDataServer', function(){
            console.log('get info from server')
        })
        socket.on('gotDataServer', AddList.gotDataServer)
        socket.on('deleted', AddList.deleted)
        socket.on('edited', AddList.edited)
    },
    gotDataServer: function(data) {
        console.log('send2')
        console.log(data)
        AppDispatcher.dispatch({
            action: "gotData",
            data  : data
        })
        console.log(data)
    },
    delete: function(data) {
        socket.emit('delete', data);
    },
    deleted: function() {
        console.log('delete action')
        socket.emit('getDataServer');
    },
    edit: function(data) {
        console.log(data);
        socket.emit('edit',data);
    },
    edited: function(data) {
        console.log('edited action')
        socket.emit('getDataServer');
    },
    addList: function(data) {
        socket.emit('data',data);
        socket.emit('getDataServer');
         AppDispatcher.dispatch({
            action: "ADD",
        })
    }
}

module.exports = AddList;