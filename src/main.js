'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
	render: function() {
		return ( 
			<h1>hello world</h1> 
			)
	}
});

 ReactDOM.render(
        <HelloWorld />,
        	document.getElementById('app')
 );