import {Component, createElement} from 'react';

export default class StateExerciseOne extends Component {
	
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}
	
	setStateCallback(){
		console.log(` right after the call count :  ${this.state.count} `);
	}
	setLocalState(state,props){
		const count = this.state.count + 1;
		console.log(` right before the call count :  ${this.state.count} `);
		return {count};
	}
	shouldComponentUpdate(){
		console.log(` shouldComponentUpdate :  ${this.state.count} `);
		return true;
	}
	
	getSnapshotBeforeUpdate(prevProps,prevState){
		console.log(` getSnapshotBeforeUpdate :  ${this.state.count} `);
		return null;
	}
	componentDidUpdate(prevProps,prevState,snapshot){
		console.log(` componentDidUpdate :  ${this.state.count} `);
	}
	
	getCount(){
		const count = this.state.count + 1;
		this.setState(this.setLocalState,this.setStateCallback);
	}
	
	static getDerivedStateFromProps(props,state){
		console.log(` getDerivedStateFromProps count :  ${state.count} `);
		return null;
	}
	render(){
		const {count} = this.state;
		
		console.log(` render count :  ${count} `);
		
		return createElement('div',null,
			   createElement('div',null,count),
			   createElement('button',{name: 'count', onClick: () => this.getCount() },'Click to Count'));
	}
}