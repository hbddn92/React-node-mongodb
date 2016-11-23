var React = require('react');
var ReactDoom = require('react-dom');
var TodoLi = require('./todoLi');
var DayTime = require('./DayTime');
var AppStore = require('../store');
var AppAction = require('../action')


var TodoSelect = React.createClass({
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
                <div className="row">
                    <div className="col-xs-12" id="allTodo">
                        <h1>web Booking</h1>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="fa fa-plus" aria-hidden="true"></i></span>
                            <input ref="input" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <DayTime ref="daytime"/>
                        <button onClick={this.onSelect} type="button" className="btn btn-default"> add </button>
                        <TodoLi data={this.props.data} />
                    </div>
                </div>
        )
    }
})


module.exports = TodoSelect;