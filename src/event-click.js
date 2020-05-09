import React, { Component,createElement } from 'react';

export default class EventClick extends Component {
	constructor(props){
		super(props);
		this.state = { count : 0 };
	}
	increment() {
		let {count} = this.state;
		count = count +1;
		this.setState( { count });
	}
	
	decrement() { 
		let {count } = this.state;
		count = count - 1;
		this.setState( { count });
	}
	
	render() {
	const {count} = this.state;
	const isDisabled = count <= 0 ? false : true ;
	console.log(isDisabled+'    '+count);
	
	return createElement('div',null,
		createElement('button',{onClick : () => this.increment(), id:'increment'},'increment'),
		createElement('span'),
		createElement('button',{onClick : () => this.decrement() , id:'decrement'},'decrement'),
		createElement('span'),
		createElement('h2',null,` Counter ${count} `));
	}
}