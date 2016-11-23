var React = require('react');
var DeleteBt = require('./deleteButton')
var EditBt = require('./editButton')

var TodoLi = React.createClass({
    render: function() {
        return(
            <div>
                <ul>{
                    this.props.data.map(function(val,id){
                        return <li key={id}>
                                    <span className="contentli" >{val.value}</span>
                                    <p>{val.day + " " + val.time}</p>
                                    <DeleteBt index={val.id}/>
                                    <EditBt   index={val.id}/>
                                </li>
                    }) }
                </ul>
            </div>
        )
    }
});

module.exports = TodoLi