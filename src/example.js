import {Component , createElement } from 'react';
import DispalyLine from 'display-line';

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = { nums : []};
	}
	load() {
		this.setState( {nums : [1,2,3,4,5]} );
	}
	increment() {
	this.setState( {nums : this.state.nums.map(val => val +1)} );
	}
	render () {
		const lines = this.state.nums.map( num => 
		createElement(DispalyLine,{val : num.toString() , key : num.toString()},null));
	
	return createElement('div',null,
		createElement('button',{onClick : () => this.load()},'load'),
		createElement('span'),
		createElement('button',{onClick : () => this.increment()},'increment'),
		createElement('ul',null,lines));
	}
}

