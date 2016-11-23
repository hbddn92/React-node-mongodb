var React = require('react');
var AppAction = require('../action')


var DeleteBt = React.createClass({
    handleEvenDelete: function() {
        AppAction.delete(this.props.index)
    },
    render: function() {
        return (
            <button onClick={this.handleEvenDelete} className="btn btn-warning" role="button">Delete</button>
        )
    }
})

module.exports = DeleteBt;