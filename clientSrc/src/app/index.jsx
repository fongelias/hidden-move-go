import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/containers/app.jsx';
//Styles
require('../scss/hiddenMoveGo.scss');


ReactDOM.render(
	(
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	),
	document.getElementById("root")
)