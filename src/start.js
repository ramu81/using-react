import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import ErrorHandler from 'error-handler';
import ExerciseOne from 'exercise-one';


ReactDOM.render(createElement(ErrorHandler,null,ExerciseOne) , 
				document.getElementById('root'));
