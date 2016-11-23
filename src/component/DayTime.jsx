var React = require('react');


var DayTime = React.createClass({
    getValue: function(){
        return this.refs.time.value + " " + this.refs.day.value
    },
    componentDidMount: function() {
        jQuery(this.refs.day).datepicker();
        jQuery(this.refs.time).timepicker();
    },
    render: function() {
        return (
                <div className="row">
                    <div className="col-xs-6">
                        <div className="input-group">
                          <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                          <input type="text" ref="day" className="form-control" placeholder="Date" aria-describedby="sizing-addon1" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="input-group">
                          <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                          <input type="text" ref="time" className="form-control" placeholder="Time" aria-describedby="sizing-addon1" />
                        </div>
                    </div>
                </div>
        )
    }
})

module.exports = DayTime;