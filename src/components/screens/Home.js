import React from 'react';
import { Box, Text, Image, Center, Flex } from '@chakra-ui/react';
import Dp from './../../assets/dp.jpg';
import {
	FaLaptopCode,
	FaMobile,
	FaTicketAlt,
	FaCoffee,
	FaReact,
	FaPython,
	FaJava,
	FaAngular,
	FaNodeJs,
} from 'react-icons/fa';
import { DiMongodb, DiJavascript1 } from 'react-icons/di';
import { SiMysql, SiCplusplus, SiC } from 'react-icons/si';
import { GiSteeringWheel, GiShuttlecock } from 'react-icons/gi';
import Pill from '../layout/Pill';
function Home() {
	const interestsList = [
		{
			name: 'Web Development',
			icon: FaLaptopCode,
		},
		{
			name: 'App Development',
			icon: FaMobile,
		},
		{
			name: 'Thrillers',
			icon: FaTicketAlt,
		},
		{
			name: 'Coffee',
			icon: FaCoffee,
		},
		{
			name: 'Formual 1',
			icon: GiSteeringWheel,
		},
		{
			name: 'Badminton',
			icon: GiShuttlecock,
		},
	];
	const techStack = [
		{
			name: 'React',
			icon: FaReact,
		},
		{
			name: 'Express',
			icon: DiJavascript1,
		},
		{
			name: 'nodejs',
			icon: FaNodeJs,
		},
		{
			name: 'Mongodb',
			icon: DiMongodb,
		},
		{
			name: 'Angular',
			icon: FaAngular,
		},
		{
			name: 'Mysql',
			icon: SiMysql,
		},
		{
			name: 'c',
			icon: SiC,
		},
		{
			name: 'c++',
			icon: SiCplusplus,
		},
		{
			name: 'Python',
			icon: FaPython,
		},
		{
			name: 'Java',
			icon: FaJava,
		},
	];

	return (
		<div>
			<Flex
				direction={{ base: `column`, lg: `row` }}
				alignItems="center"
				mt={120}
			>
				<Box flex={{ base: 1, lg: 1 }}>
					<Image src={Dp} alt="Display pic" boxSize="200px" borderRadius="xl" />
				</Box>
				<Box flex={{ base: 1, lg: 2 }}>
					<Text
						color="#00ffa2"
						fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
						fontWeight="bold"
						textAlign={{ base: 'center', lg: 'left' }}
					>
						Hey!, I am Pranav
					</Text>
					<Text
						color="white"
						fontSize={{ md: 'large', lg: 'larger' }}
						textAlign={{ base: 'center', lg: 'left' }}
					>
						Welcome to my website. Built using React, i use this website to show
						my projects, experience and also to tell people about myself.
					</Text>
				</Box>
			</Flex>
			<Center mt={20}>
				<Text
					color="#00ffa2"
					fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
					fontWeight="bold"
				>
					About me
				</Text>
			</Center>
			<Center>
				<Text
					color="white"
					fontSize={{ md: 'large', lg: 'larger' }}
					textAlign="center"
				>
					I am a Computer Science Undergrad from IIIT Bangalore, primarily
					interested in Machine Learning, Web Development and App Development. I
					like to explore new technology and work on my projects when I am free.
					I love to play badminton and watch F1.
				</Text>
			</Center>
			<Box>
				<Text color="#00ffa2" fontSize="3xl" fontWeight="bold" mt={16}>
					Interests:
				</Text>
				<Pill list={interestsList} color="cyan"></Pill>
			</Box>
			<Box>
				<Text color="#00ffa2" fontSize="3xl" fontWeight="bold" mt={16}>
					Preferred Tech:
				</Text>
				<Pill list={techStack} color="orange"></Pill>
			</Box>
		</div>
	);
}

export default Home;
