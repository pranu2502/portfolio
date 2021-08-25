import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import ExperienceCard from '../layout/ExperienceCard';
function Experience() {
	return (
		<div>
			<Center>
				<Flex flexDirection="column" mt={120}>
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
				</Flex>
			</Center>
		</div>
	);
}

export default Experience;
