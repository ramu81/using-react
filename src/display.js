import React, {Component , createElement} from 'react';
import DispalyLine from 'display-line';
import PropTypes from 'prop-types';
import Name from 'name';

export default class Display extends Component {
	
	constructor(props) {
		super(props);
		this.state = { count : this.props.start, pets:this.props.pets };
	}
		
	static getDerivedStateFromProps(props,state){
		if(state.count < props.start)
			return { count: props.start, pets: props.pets  };
		return null;
	}
	
	render(){
		const {count,pets} = this.state;
		const lines = pets.map( (num,index) => 
		createElement(DispalyLine,{val : num.name , key : index.toString()},null));
		return createElement('div',null,
		createElement('span',null,`Random Value ${count}`),
		createElement('ul',null,lines));
	}
}

Display.propTypes = {count: function(props,prop,component){
	if(props.count < 100 )
		return new Error('value should be greter than 100');
	return null;
} , pets : PropTypes.arrayOf(PropTypes.instanceOf(Name))};

Display.defaultProps = { count: 1000, pets: []};
