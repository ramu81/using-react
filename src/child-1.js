import { Component, createElement } from 'react';

export default class ChildOne extends Component {
	constructor(props){
		super(props);
		this.state = { childCount: 0, parentCount: props.parentCount};
	}
	static getDerivedStateFromProps(props,state){
	 return {parentCount: props.parentCount};
	}
	
	shouldComponentUpdate(newProps,newState){
		return newProps.parentCount !== this.props.parentCount || 
		newState.childCount !== this.state.childCount;
	}
	
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('getSnapshotBeforeUpdate .. call'+ ` ${prevProps.parentCount} ${prevState.childCount} `);
		return null;
	}
	
	componentDidUpdate(prevProps, prevState, snapshot){
		console.log('componentDidUpdate .. call'+ ` ${prevProps.parentCount} ${prevState.childCount} ${snapshot}`);
	}
	
	render() {
		
		const {childCount,parentCount} = this.state;
		return createElement('div',null,
			   createElement('h3',null,`parent's count ${parentCount} and child's count  ${childCount}`),
			   createElement('button',{name : 'Child', onClick: () => 
			this.setState({childCount: this.state.childCount + 1 })},'Child Click'));
	}
}