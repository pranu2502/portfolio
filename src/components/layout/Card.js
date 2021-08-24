import React from 'react';
import {
	Box,
	Image,
	Text,
	Center,
	Stack,
	Flex,
	Link,
	HStack,
	Divider,
	scaleFadeConfig,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
function Card({ title, github, description, image }) {
	const property = {
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title: 'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$1,900.00',
		reviewCount: 34,
		rating: 4,
	};
	return (
		<Center
			borderRadius="2xl"
			boxShadow="2xl"
			maxWidth="400px"
			borderColor="gray.600"
			borderWidth="thin"
			_hover={{
				boxShadow: 'dark-lg',
			}}
		>
			<Link href={github} isExternal="true">
				<Stack>
					<Image
						src={image}
						width={1250}
						height={600}
						w="auto"
						h="auto"
						transition="0.3s"
						borderRadius="10px 10px 0px 0px"
						alt="project image"
					/>

					<HStack justifyContent="space-between" px={5}>
						<Text fontSize="2xl" color="white" alignSelf="flex-start">
							{title}
						</Text>
					</HStack>
					<Divider mx={5} />
					<Box px={5}>
						<Text color="grey" fontSize="sm">
							{description}
						</Text>
					</Box>
				</Stack>
			</Link>
		</Center>
	);
}

export default Card;
