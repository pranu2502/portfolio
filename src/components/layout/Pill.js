import React from 'react';
import { Wrap, WrapItem, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
function Pill({ list, color }) {
	return (
		<Wrap mb={12}>
			{list.map((interest) => (
				<WrapItem>
					<Tag size="lg" colorScheme={color} borderRadius="md">
						<TagLeftIcon boxSize="12px" as={interest.icon} />
						<TagLabel>{interest.name}</TagLabel>
					</Tag>
				</WrapItem>
			))}
		</Wrap>
	);
}

export default Pill;
