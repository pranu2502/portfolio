import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/screens/Home';
import Experience from './components/screens/Experience';
import Projects from './components/screens/Projects';
import Footer from './components/layout/Footer';
function App() {
	return (
		<div className="container">
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/projects" component={Projects} />
					<Footer />
				</Fragment>
			</Router>
		</div>
	);
}

export default App;
