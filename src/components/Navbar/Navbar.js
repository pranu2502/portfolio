import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Link } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
function Navbar() {
	return (
		<div className="nav-bar">
			<HStack spacing={16}>
				<NavLink to="/">
					<Link
						className="nav-bar-item"
						color="white"
						_after={{
							bg: transparentize(`brand.500`, 0.36),
						}}
					>
						Home
					</Link>
				</NavLink>
				<NavLink to="/about">
					<Link
						className="nav-bar-item"
						color="white"
						_after={{
							bg: transparentize(`brand.500`, 0.36),
						}}
					>
						About
					</Link>
				</NavLink>
				<NavLink to="/projects">
					<Link
						className="nav-bar-item"
						color="white"
						_after={{
							bg: transparentize(`brand.500`, 0.36),
						}}
					>
						Projects
					</Link>
				</NavLink>
			</HStack>
		</div>
	);
}

export default Navbar;
