import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';
function Navbar() {
	return (
		<BrowserRouter>
			<div className="nav-bar">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about">
						<About />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default Navbar;
