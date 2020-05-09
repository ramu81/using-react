import {Component , createElement } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
	render () {
		const { name , age } = this.props;
		
		return createElement('span',{className : "highlightedCase"},
		` ${name} having ${age}'s old`);
	}
}

Greet.propTypes = {name: PropTypes.string , age: PropTypes.number};

Greet.defaultProps = { name: 'Laxman' , age: 5};

