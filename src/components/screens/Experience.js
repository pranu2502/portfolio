import React from 'react';
import { Center, Flex, Heading } from '@chakra-ui/react';
import ExperienceCard from '../layout/ExperienceCard';
import AuxD from './../../assets/AuxD-logo.png';
import ehrc from './../../assets/ehrc.png';
import zense from './../../assets/zense.png';

function Experience() {
	return (
		<div>
			<Center>
				<Flex flexDirection="column" mt={120}>
					<Heading color="white" mb={10}>
						Experience
					</Heading>

					<ExperienceCard
						img={ehrc}
						company="EHRC-IIITB"
						role="Summer Intern"
						dates="May 2021 - August 2021"
					/>
					<ExperienceCard
						company="Aux Dynamics"
						role="Project Intern"
						dates="December 2020 - April 2021"
						img={AuxD}
					/>
					<ExperienceCard
						img={zense}
						company="Zense"
						role="Developer"
						dates="January 2020 - Present"
					/>
				</Flex>
			</Center>
		</div>
	);
}

export default Experience;
