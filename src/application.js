import { Component, createElement } from 'react';
import AppChild from 'app-child';

export default class Application extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {		
		console.log('Application : render');
		return createElement('div',null,
		createElement(AppChild));
	}
}