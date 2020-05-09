import React, { Component , createElement } from 'react';

export default class EventHandling extends Component {
	constructor(props) {
		super(props);
		this.state = { left: [ 'one','two','three'], right: ['four'] };
	}
	onLeftClick(text) {
		let { left, right } = this.state;
		left = left.filter(item => item !== text);
		right=right.slice();
		right.push(text);
		this.setState({left,right});
	}
	
	onRightClick(text) {
		let { left, right } = this.state;
		right = right.filter(item => item !== text);
		left=left.slice();
		left.push(text);
		this.setState({left,right});		
	}
	render() {
		const { left, right } = this.state;
		const list = left.length > right.length ? left : right ;
		
		const tdata = list.map((ignore,index) => [left[index], right[index]])
			.map(([leftText='',righttext=''], index) => 
		 createElement('tr',{key: index,align: 'center'},
		 createElement('td',{onClick: () => this.onLeftClick(leftText)},leftText), 
		 createElement('td',{onClick: () => this.onRightClick(righttext)},righttext)));
	   const thead = createElement('thead',null,	createElement('tr',null,
		createElement('th',null,'Left'), createElement('th',null,'Right')));
		return createElement('table',{width: '100%'},
		thead, createElement('tbody',null,tdata));
	}
}