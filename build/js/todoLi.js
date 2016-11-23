var React = require('react');
var DeleteBt = require('./deleteButton')
var EditBt = require('./editButton')

var TodoLi = React.createClass({displayName: "TodoLi",
    render: function() {
        return(
            React.createElement("div", null, 
                React.createElement("ul", null, 
                    this.props.data.map(function(val,id){
                        return React.createElement("li", {key: id}, 
                                    React.createElement("span", {className: "contentli"}, val.value), 
                                    React.createElement("p", null, val.day + " " + val.time), 
                                    React.createElement(DeleteBt, {index: val.id}), 
                                    React.createElement(EditBt, {index: val.id})
                                )
                    }) 
                )
            )
        )
    }
});

module.exports = TodoLi