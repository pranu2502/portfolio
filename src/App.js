import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Projects from './components/screens/Projects';
function App() {
	return (
		<div className="container">
			<Router>
				<Navbar />
				<Fragment>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
				</Fragment>
			</Router>
		</div>
	);
}

export default App;
