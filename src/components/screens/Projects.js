import React from 'react';
import {
	Box,
	Text,
	Image,
	Center,
	Flex,
	Container,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';
import Dp from './../../assets/dp.jpg';
import SE from './../../assets/safe_excursions.png';
import SPS from './../../assets/sliding_puzzle.jpg';
import portfolio from './../../assets/portfolio.png';
import Card from '../layout/Card';

function Projects() {
	return (
		<div>
			<Center>
				<Flex flexDirection="column" mt={120}>
					<Heading color="white" mb={10}>
						Projects
					</Heading>
					<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
						<Card
							title="Sliding Puzzle Solver"
							description="A gui based Python project that solves a Sliding puzzle using A* heuristic. 
							The GUI is built using tkinter and it takes the intital ordering of the tiles through the terminal"
							github="https://github.com/pranu2502/Sliding-Puzzle-solver"
							image={SPS}
						/>
						<Card
							title="Safe Excursions"
							description="Safe Excursions is a MERN based application which calculates how safe a place is to visit,
							 during the pandemic. It uses Mapbox to display the map and shows the average of ratings given by the user"
							image={SE}
							github="https://github.com/kernelpanic77/calvin-client"
						/>
						<Card
							title="Package Tracker"
							description="Built using Java swing, given a set of nodes as hubs, package tracker basically finds the optimal 
							route to travel between any two hubs"
							github="#"
						/>
						<Card
							title="Portfolio"
							description="Portfolio contains details about me like my projects, my experience, interests etc. Built using React and chakra-UI"
							github="https://github.com/pranu2502/portfolio"
							image={portfolio}
						/>
					</SimpleGrid>
				</Flex>
			</Center>
		</div>
	);
}

export default Projects;
