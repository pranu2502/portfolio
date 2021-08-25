import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Link, Box } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
function Navbar() {
	return (
		<Box
			width="60vw"
			mt={12}
			justifyContent="flex-end"
			display="flex"
			position="fixed"
			top="0"
		>
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
				<NavLink to="/experience">
					<Link
						className="nav-bar-item"
						color="white"
						_after={{
							bg: transparentize(`brand.500`, 0.36),
						}}
					>
						Experience
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
		</Box>
	);
}

export default Navbar;
