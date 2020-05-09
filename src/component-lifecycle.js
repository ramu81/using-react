import {Component, createElement} from 'react';
import Child from 'child';

export default class ComponentLifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false,message: 'Hello' };
	}
	
	render() {
		const show = this.state.show? createElement(Child,{message: this.state.message}):' ';
		
		return createElement('div',null,
		createElement( 'input',{type: 'checkbox', defaultChecked: this.state.show,
		onChange:  e => this.setState({show: e.target.checked}) } ),
		createElement('div',null, show));
	}
}