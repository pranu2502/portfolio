import React from 'react';
import {
	Box,
	Image,
	Text,
	Center,
	Stack,
	Link,
	HStack,
	Divider,
} from '@chakra-ui/react';

function Card({ title, github, description, image }) {
	return (
		<Center
			borderRadius="2xl"
			boxShadow="2xl"
			maxWidth="400px"
			bgColor="#1d2530"
			_hover={{
				boxShadow: 'dark-lg',
			}}
		>
			<Link href={github} isExternal="true">
				<Stack>
					<Image
						src={image}
						height={200}
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
