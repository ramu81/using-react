import { Component, createElement } from 'react';
import ReactEventChild from 'react-event-child';

export default class ReactEventLifeCycle extends Component {
	constructor(props){
		super(props);
		this.state = {show: false, parentCount: 0};
	}

	render() {
		
		const {parentCount,show } = this.state;
		const child = show === true ? createElement(ReactEventChild,{parentCount}) : '';
		return createElement('div',null,
		createElement('hr'),
		createElement('button',{name:'pbutton', onClick: () => 
		this.setState({parentCount: parentCount+1})},'Click'),
		createElement('span',null,'   '),
		createElement('button',{name:'child', onClick: () => 
		this.setState({show: !show})},'Show Child'),
		createElement('hr'), child);
	}
}