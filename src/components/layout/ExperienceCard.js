import React from 'react';
import { Text, Flex, Image, Stack, Link } from '@chakra-ui/react';
function ExperienceCard({ company, dates, role, img }) {
	return (
		<Link href="#" isExternal mt={4}>
			<Flex
				align="center"
				borderWidth="thin"
				borderColor="gray.500"
				borderRadius="lg"
				padding="5"
				width="50vw"
				mb={10}
				h="120px"
				_hover={{
					boxShadow: 'dark-lg',
				}}
			>
				<Image src={img} width={['40px', '50px', '90px']}></Image>
				<Stack marginLeft="30px" spacing={7}>
					<Flex>
						<Text fontSize="xl" fontWeight="bold" mb={2} color="white">
							{role}
						</Text>
					</Flex>
					<Flex
						justifyContent="space-between"
						width="40%"
						position="absolute"
						mt="16px"
					>
						<Text fontWeight="bold" marginInline={2} mb={2} color="white">
							{company}
						</Text>
						<Text fontWeight="bold" marginInline={2} mb={2} color="white">
							{dates}
						</Text>
					</Flex>
				</Stack>
			</Flex>
		</Link>
	);
}

export default ExperienceCard;
