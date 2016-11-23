var React = require('react');
var AppAction = require('../action');
var DayTime = require('./DayTime');

var EditBt = React.createClass({displayName: "EditBt",
    getInitialState: function() {
        return { textClass : ""}
    },
    handleEvenEdit: function() {
        this.setState({textClass : this.props.index});
    },
    notShare: function() {
        this.setState({textClass : ""});
    },
    share: function() {
        var daytimeValue = this.refs.daytime.getValue().split(" ");
            var inputValue = {
                                id    : this.props.index ,
                                value : this.refs.input.value,
                                day   : daytimeValue[1],
                                time  : daytimeValue[0]
                             };
            AppAction.edit(inputValue);
            this.setState({textClass : ""});
    },
    render: function() {
        var style = {};
        if(this.state.textClass) {
            style.display = ""
        }
        style.display = (this.state.textClass ? "inline-block" : "none")
        return (
            React.createElement("span", null, 
                React.createElement("button", {onClick: this.handleEvenEdit, className: "btn btn-warning", role: "button"}, "Edit"), 
                React.createElement("div", {style: style}, 
                    React.createElement("div", {className: "input-group"}, 
                            React.createElement("span", {className: "input-group-addon", id: "basic-addon1"}, React.createElement("i", {className: "fa fa-plus", "aria-hidden": "true"})), 
                            React.createElement("input", {ref: "input", type: "text", className: "form-control", placeholder: "Username", "aria-describedby": "basic-addon1"})
                    ), 
                    React.createElement(DayTime, {ref: "daytime"}), 
                    React.createElement("button", {onClick: this.notShare, className: "btn btn-warning", role: "button"}, "cancel"), 
                    React.createElement("button", {onClick: this.share, className: "btn btn-warning", role: "button"}, "save")
                )
            )
        )
    }
});

module.exports = EditBt