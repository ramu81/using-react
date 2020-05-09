import { Component , createElement } from 'react';

export default class EventHandling1 extends Component {

	change(e) {
		
		let lText = e.target.textContent ;
		let temChar = lText[0].toUpperCase();
		const rightStr = lText.substring(1,lText.length);
		lText = lText[0] === temChar ? temChar.toLowerCase()+''+rightStr : temChar +''+rightStr;
		
		e.persist();
		
		setTimeout(() => e.target.textContent = lText ,2000);
	}
	
	
	render() {
		return createElement('span',{onClick : e => this.change(e)},'Hello');
	}
}