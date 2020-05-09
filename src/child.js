import { Component, createElement } from 'react';

export default class Child extends Component {
	constructor(props) {
		super(props);
		console.log('constructed ...');
		this.state = {message: this.props.message};
	}
	
	componentDidMount(){
		console.log('componentDidMount ...');
	}
	componentWillUnmount(){
		console.log('componentWillUnmount ...');
	}	
	static getDerivedStateFromProps(props,state) {
		if(props.message !== state.message)
			return {message: props.message}
		return null;
	}
	render(){
		return createElement('h3',null,this.state.message);
	}
}