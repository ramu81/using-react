import { Component, createElement } from 'react';
import ChildOne from 'child-1';

export default class RenderAndDerivedStateFromProps extends Component {
		constructor(props){
			super(props);
			this.state = { parentCount : 0 };
		}
		
		render() {
			const {parentCount} = this.state;
			
			return createElement('div', null,
			createElement('button',{name : 'Click', onClick: () => 
			this.setState({parentCount: this.state.parentCount + 1 })},'Parent Click'),
			createElement('span',null,'   '),
			createElement('button',{ onClick: () => this.setState({}), name: 'JClick' },
			'Just Click'),
			createElement('hr'),createElement(ChildOne,{parentCount}));
		}
}