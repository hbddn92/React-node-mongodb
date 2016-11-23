var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('./dispatcher.js');
var assign = require('object-assign');
var _ = require('underscore');

var data = [];

function addList(dataAction) {
    data.push(dataAction);
};

var StoreChange = _.extend(EventEmitter.prototype, {
    getAll: function() {
        return data
    },
    
    emitChange: function() {
        this.emit('chang');  
    },
    
    addChangeListener: function(callback) {
        this.on('chang', callback);
    },
});

AppDispatcher.register(function(payload){
    switch (payload.action) {
        case "ADD" :
//            addList(payload.data);
            StoreChange.emitChange();
            break;
        case "gotData" :
            console.log('send3');
            console.log(payload.data);
            data = payload.data;
            StoreChange.emitChange();
            break;
    }
});

module.exports = StoreChange;
