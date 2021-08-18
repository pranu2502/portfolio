import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
function Home() {
	return (
		<SimpleGrid mt={56} columns={{ lg: 2, md: 1 }}>
			<Box>
				<img src="./../../../public/dp.jpg" alt="Display pic" />
			</Box>
			<Box>
				<Text color="#00ffa2" fontSize="4xl" fontWeight="bold">
					Hey!, I am Pranav
				</Text>
				<Text color="white" fontSize="larger">
					Welcome to my website. Built using React, i use this website to show
					my projects, experience and also to tell people like you about me.
				</Text>
			</Box>
		</SimpleGrid>
	);
}

export default Home;
