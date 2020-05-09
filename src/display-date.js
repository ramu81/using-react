import React, { Component , createElement } from 'react';
import PropTypes from 'prop-types';

export default class DisplayDate extends Component {
		
	render() {
		const { time } = this.props;
		return createElement('span',null,time);
	}
}

DisplayDate.propTypes = {time: PropTypes.string };

DisplayDate.defaultProps = { time: ' ' };