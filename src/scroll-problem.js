import {Component, createElement} from 'react';
import ScrollChild from 'scroll-child';

export default class ScrollProblem extends Component {
	
	constructor(props){
		super(props);
		this.state = { items: [1,2,3,4]};
	}
	componentDidMount(){
		setInterval(() => this.addElement(),5000);
	}
	
	addElement(){
		let tempItems = this.state.items.slice();
		tempItems.push(tempItems.length + 1);
		this.setState({items: tempItems});
	}
	render() {
		return createElement('div',null,
		createElement('h2',null,'Header'),
		createElement(ScrollChild,{items: this.state.items}),
		createElement('h2',null,'Footer'));
	}
}