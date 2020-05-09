import React, { Component , createElement } from 'react';
import PropTypes from 'prop-types';

export default class DispalyLine extends Component {
	render () {
		const { val } = this.props;
		return createElement('li',null,val);
	}
}

DispalyLine.propTypes = {
	val : PropTypes.string
};