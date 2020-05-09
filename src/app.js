import { Component , createElement } from 'react';
import Greet from 'greet';
import DisplayDate from 'display-date';
import Display from 'display';
import Name from 'name';

export default class App extends Component {
	
	constructor(props){
	super(props);
	this.state = {name:'Sai Charan', age: 5 , time: '', start : 10, pets: []};
	setInterval(() => this.changeState(),1000);
	}
	
	changeState(){
		const date = new Date();
		var sec = date.getSeconds();
		 sec = sec <=9 ? '0'+sec : sec;
		var min = date.getMinutes();
		 min = min <=9 ? '0'+min : min;
		const time = min + ' : ' +sec;
		const pets = [new Name('Dog'),new Name('Cat'),new Name('Duck')];
		this.setState( {name:'Ram', age: 40, time, pets, start : Math.round(Math.random() * 1000 ) });
	}
	
	render () {
		const {name , age, time,start,pets} = this.state;
		return createElement('span',null, 
		createElement('span',{className : "highlightedCase"},'Hello '),
		createElement(Greet,{name, age},null),
		createElement('hr'),
		createElement(this.props.children),
		createElement('hr'),
		createElement(DisplayDate,{time}),
		createElement('hr'),
		createElement(Display,{start,pets}),
		createElement('hr'));
		}
}