import React from 'react';

module.exports = React.createClass({
	render: function() {
		return (
			<span className="audio-name-label pull-left">{this.props.name}</span>
		);
	}
})