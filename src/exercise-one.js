import React, {Component, createElement} from 'react';
import ExerciseOneChild from 'exercise-one-child';

export default class ExerciseOne extends Component {
	
	constructor(props) {
		super(props);
		this.state = {show: false, freeze: false};
	}
	
	render() {
		
		const {show, freeze} = this.state;
		
		const child = show === true ? createElement(ExerciseOneChild,{freeze}) : '';
		
		return createElement('div',null,
				
				createElement('input',{type: 'checkbox', name: 'freeze',
				checked: freeze,
				onChange: (e) => this.setState({ freeze: e.target.checked })}),
				createElement('lable',{htmlFor: 'freeze'},'Freeze'),
				createElement('br'),
				
				createElement('input',{type: 'checkbox', name: 'show',
				checked: show,
				onChange: (e) => this.setState({ show: e.target.checked })}),
				createElement('lable',{htmlFor: 'show'},'Show'),
				
				createElement('hr'),
				child );
	
	}
	
}