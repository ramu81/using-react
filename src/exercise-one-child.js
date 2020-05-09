import { Component, createElement } from 'react';
import Mailer from 'mailer';

export default class ExerciseOneChild extends Component {
		
	componentDidMount(){

		this.intervalId = setInterval(() => this.setState({}),1000);	
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	shouldComponentUpdate(){
		return !this.props.freeze;
	}
	render() {
		return createElement('div',null,new Date().getSeconds());
	}
}