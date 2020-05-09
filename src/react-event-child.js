import {Component, createElement} from 'react';

export default class ReactEventChild extends Component {
	
	constructor(props){
		super(props);
		this.state = {parentCount: this.props.parentCount};
	}
	
	static getDerivedStateFromProps(newProps,oldState){
		if(oldState.parentCount !== newProps.parentCount)
			return {parentCount: newProps.parentCount};
		return null;
	}
	
	componentDidMount(){
	}
	
	componentWillUnmount(){
		
	}
	
	shouldComponentUpdate(newProps, newState){
		return newProps.parentCount !== this.state.parentCount;
	}
	
	render(){
		return createElement('div',null,
		createElement('span',null,` Parent count : ${this.state.parentCount} `));
	}
	getSnapshotBeforeUpdate(oldProps,oldState){
		return null;
	}
	componentDidUpdate(oldProps,oldState,snapshot){
	}
}