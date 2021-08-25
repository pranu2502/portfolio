import React from 'react';
import { Text, Flex, Image, Stack, Link, Heading } from '@chakra-ui/react';
import AuxD from './../../assets/AuxD-logo.png';
function ExperienceCard({ title, description, dates, role, img }) {
	return (
		<Link
			href="#"
			isExternal
			_hover={{
				boxShadow: 'dark-lg',
			}}
			mt={4}
		>
			<Flex
				align="center"
				borderWidth="thin"
				borderColor="gray.500"
				borderRadius="lg"
				padding="5"
			>
				<Image src={AuxD} width={['40px', '50px', '90px']}></Image>
				<Stack marginLeft="30px">
					<Flex>
						<Text fontSize="xl" fontWeight="bold" mb={2} color="white">
							Project Intern
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="bold" marginInline={2} mb={2} color="white">
							AUxDynamics
						</Text>
						<Heading
							as="h4"
							size="sm"
							fontWeight="semibold"
							mb={2}
							color="white"
						>
							December 2020 - April 2021
						</Heading>
					</Flex>
					<Text color="gray.300">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
						officiis quis totam ipsum facilis suscipit deleniti similique
						voluptatibus. Quo, autem quos nobis ipsum ex est sunt corporis fuga
						voluptatibus eum!
					</Text>
				</Stack>
			</Flex>
		</Link>
	);
}

export default ExperienceCard;
