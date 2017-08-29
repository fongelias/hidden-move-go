import React from 'react';
import { Route, Link } from 'react-router-dom';


const Dashboard = () => (
	<div>
		<h1>Dashboard</h1>
	</div>
)


const App = () => (
	<div>
		<nav>
			<Link to="/dashboard">Dashboard</Link>
		</nav>
		<div>
			<Route path="/dashboard" component={Dashboard}/>
		</div>
	</div>
)


export default App;



