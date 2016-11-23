var React = require('react');


var DayTime = React.createClass({displayName: "DayTime",
    getValue: function(){
        return this.refs.time.value + " " + this.refs.day.value
    },
    componentDidMount: function() {
        jQuery(this.refs.day).datepicker();
        jQuery(this.refs.time).timepicker();
    },
    render: function() {
        return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-6"}, 
                        React.createElement("div", {className: "input-group"}, 
                          React.createElement("span", {className: "input-group-addon", id: "sizing-addon1"}, React.createElement("i", {className: "fa fa-calendar", "aria-hidden": "true"})), 
                          React.createElement("input", {type: "text", ref: "day", className: "form-control", placeholder: "Date", "aria-describedby": "sizing-addon1"})
                        )
                    ), 
                    React.createElement("div", {className: "col-xs-6"}, 
                        React.createElement("div", {className: "input-group"}, 
                          React.createElement("span", {className: "input-group-addon", id: "sizing-addon1"}, React.createElement("i", {className: "fa fa-clock-o", "aria-hidden": "true"})), 
                          React.createElement("input", {type: "text", ref: "time", className: "form-control", placeholder: "Time", "aria-describedby": "sizing-addon1"})
                        )
                    )
                )
        )
    }
})

module.exports = DayTime;