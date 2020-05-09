import { Component, createElement } from 'react';

export default class ErrorHandler extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render(){
		return createElement('div',null,
		createElement('span',null,this.state.error),
		createElement(this.props.children));
	}
	
	static getDerivedStateFromError(error){
		return {error: error.message};
	}
}