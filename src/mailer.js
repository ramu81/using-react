let Mailer  = function() {
	from(name){
		console.log('from ...');
		return this;
	}
	to(name){
		console.log('to ...');
		return this;
	}
	subject(name){
		console.log('subject ...');
		return this;
	}
	body(name){
		console.log('body ...');
		return this;
	}
}

export default Mailer;