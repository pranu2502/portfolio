import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Experience from './components/screens/Experience';
import Projects from './components/screens/Projects';
function App() {
	return (
		<div className="container">
			<Router>
				<Navbar />
				<Fragment>
					<Route exact path="/" component={Home} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/projects" component={Projects} />
				</Fragment>
			</Router>
		</div>
	);
}

export default App;
