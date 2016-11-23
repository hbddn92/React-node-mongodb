var React = require('react');
var AppAction = require('../action')


var DeleteBt = React.createClass({displayName: "DeleteBt",
    handleEvenDelete: function() {
        AppAction.delete(this.props.index)
    },
    render: function() {
        return (
            React.createElement("button", {onClick: this.handleEvenDelete, className: "btn btn-warning", role: "button"}, "Delete")
        )
    }
})

module.exports = DeleteBt;