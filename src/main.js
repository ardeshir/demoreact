'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


var HelloWorld = React.createClass({

	propType: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},

	 getDefaultProps: function() {
		return {
			name: 'Ardeshir'
		}
	}, 

	render: function() {
		var greeting = "world";

		if(this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}

		return ( 
			<h1>Watup { greeting }</h1> 
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