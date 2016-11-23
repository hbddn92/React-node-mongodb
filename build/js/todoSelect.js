var React = require('react');
var ReactDoom = require('react-dom');
var TodoLi = require('./todoLi');
var DayTime = require('./DayTime');
var AppStore = require('../store');
var AppAction = require('../action')


var TodoSelect = React.createClass({displayName: "TodoSelect",
    onSelect: function() {
        var daytime = this.refs.daytime.getValue().split(" ");
        var inputValue = this.refs.input.value;
        var data = {
            value :  inputValue,
            time  :  daytime[0],
            day   :  daytime[1]
        }
        if(inputValue) {
            AppAction.addList(data);
            this.refs.input.value = ""
        }
    },
    getDate: function() {
        
    },
    render: function() {
        return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-12", id: "allTodo"}, 
                        React.createElement("h1", null, "web Booking"), 
                        React.createElement("div", {className: "input-group"}, 
                            React.createElement("span", {className: "input-group-addon", id: "basic-addon1"}, React.createElement("i", {className: "fa fa-plus", "aria-hidden": "true"})), 
                            React.createElement("input", {ref: "input", className: "form-control", placeholder: "Username", "aria-describedby": "basic-addon1"})
                        ), 
                        React.createElement(DayTime, {ref: "daytime"}), 
                        React.createElement("button", {onClick: this.onSelect, type: "button", className: "btn btn-default"}, " add "), 
                        React.createElement(TodoLi, {data: this.props.data})
                    )
                )
        )
    }
})


module.exports = TodoSelect;