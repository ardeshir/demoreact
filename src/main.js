'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({

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
			<h1>What up {this.props.name}</h1> 
			)
	}
});

 ReactDOM.render(
        <HelloWorld />,
        	document.getElementById('app')
 );