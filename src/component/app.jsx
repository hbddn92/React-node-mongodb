var React = require('react');
var ReactDoom = require('react-dom');
var TodoSelect = require('./todoSelect');
var AppStore = require('../store');
var AppAction = require('../action')

var App = React.createClass({
    getInitialState: function() {
        return { data : AppStore.getAll() }
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this.storeUpdate);
        AppAction.getDataServer();
    },
     storeUpdate: function() {
        var ab = AppStore.getAll();
        this.setState({ data : AppStore.getAll() })
    },
    render: function() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 hidden-xs">
                            <h1>TODAY</h1>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <TodoSelect data={AppStore.getAll()}/>
                        </div>
                        <div className="col-xs-12 col-sm-4 hidden-xs">
                            <h1>Search for day</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
})

ReactDoom.render(<App />, document.getElementById('component'))