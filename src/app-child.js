import {Component, createElement, createRef} from 'react';

export default class AppChild extends Component {
	
	constructor(props){
		super(props);
		this.state = {displayText : 'Hi'};
		this.textId = createRef();
	}
	
	render() {
		
		let data = this.state.displayText[0].toUpperCase();
		
		return createElement('span',null,
		createElement('span',null,data),
		createElement('div',null,this.state.errorMessage),
		createElement('div',null,
		createElement('input',{ref: this.textId}),
		createElement('span',null,'   '),
		createElement('button',{name: 'button1', onClick : () => this.setState({displayText: this.textId.current.value})},'Click me')
		));
	}
}