import { Component, createElement, createRef} from 'react';

export default class ScrollChild extends Component {
	constructor(props){
		super(props);
		this.state = { items: props.items};
		this.ulList = createRef();
	}
	
	static getDerivedStateFromProps(props,state){
		return { items: props.items};
	}
	
	getSnapshotBeforeUpdate(prevProps,prevState){
		const {scrollTop, scrollHeight, offsetHeight} = this.ulList.current;
		console.log(` scrollTop : ${scrollTop} , scrollHeight : ${scrollHeight} , offsetHeight : ${offsetHeight} ${scrollHeight - scrollTop}`);
//		if( (scrollHeight - scrollTop) >= offsetHeight ){
	//		return 'boom';
		//}
		return null;
	}
	
	componentDidUpdate(prevProps,prevState,snapshot){
		if( snapshot === 'boom'){
			const {scrollHeight} = this.ulList.current;
			this.ulList.current.scrollTop = scrollHeight;
		}
			
	}
	
	render() {
			const {items} = this.state;
			const listComp = items.map( item => createElement('li',{key: item.toString()},item));
			return createElement('ul',{ref: this.ulList},listComp);
	}
}
