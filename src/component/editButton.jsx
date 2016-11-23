var React = require('react');
var AppAction = require('../action');
var DayTime = require('./DayTime');

var EditBt = React.createClass({
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
            <span>
                <button onClick={this.handleEvenEdit} className="btn btn-warning" role="button">Edit</button>
                <div style={style}>
                    <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-plus" aria-hidden="true"></i></span>
                            <input ref="input" type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                    </div>
                    <DayTime ref="daytime" />
                    <button onClick={this.notShare} className="btn btn-warning" role="button">cancel</button>
                    <button onClick={this.share} className="btn btn-warning" role="button">save</button>
                </div>
            </span>
        )
    }
});

module.exports = EditBt