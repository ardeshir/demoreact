'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


var HelloWorld = React.createClass({

	propType: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},

	getInitialState: function() {
		return { value : 1  }
	},

	componentDidMount: function() {
		this.setState( { value: this.state.value + 19 } )
	},

	 getDefaultProps: function() {
		return {
			name: 'Ardeshir'
		}
	}, 

	render: function() {
		var greeting = "World";

		if(this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}

		return (<div> 
			<h1>Watup { greeting }</h1> {this.state.value}
			</div>
			)
	}
});

var Person = React.createClass({

	propType: {
		name: React.PropTypes.string.isRequired
	},

	 getDefaultProps: function() {
		return {
			name: 'Ardeshir'
		}
	}, 

	render: function() {
		return ( 
			<span>{this.props.name}</span> 
			)
	}
});

 ReactDOM.render(
        <HelloWorld name="Ardeshir" isPerson={true}/>,
        	document.getElementById('app')
 );




