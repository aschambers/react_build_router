var React = require('react')
var ReactDOM = require('react-dom')

var App = React.createClass({
    render: function(){
    	console.log(this.props)
        return <h1>Route: {this.props.route}</h1>
    }
})

window.onhashchange = function(){
	renderApp()
};

function renderApp(){
	ReactDOM.render(<App route={location.hash.substr(1)}/>, document.getElementById('app'))
}

renderApp()
