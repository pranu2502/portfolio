import { Center, HStack, Stack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import { CgCopyright } from 'react-icons/cg';
function Footer() {
	return (
		<Center mb={10}>
			<Stack justify="center">
				<HStack spacing={8} mb={4} justify="center">
					<Link
						_hover={{
							boxShadow: 'dark-lg',
						}}
						href="https://github.com/pranu2502"
					>
						<SiGithub color="white" size={28} />
					</Link>
					<Link
						_hover={{
							boxShadow: 'dark-lg',
						}}
						href="mailto:pranav.reddy@iiitb.ac.in"
					>
						<GrMail color="white" size={28} />
					</Link>
					<Link
						_hover={{
							boxShadow: 'dark-lg',
						}}
						href="https://www.linkedin.com/in/pranav-reddy-506739192"
					>
						<SiLinkedin color="white" size={28} />
					</Link>
				</HStack>

				<Stack justify="center">
					<Text color="white">
						Built using{' '}
						<Link color="#00ffa2" isExternal href="https://reactjs.org/">
							React.js
						</Link>{' '}
						and{' '}
						<Link color="#00ffa2" isExternal href="https://chakra-ui.com/">
							Chakra UI
						</Link>
					</Text>

					<HStack justify="center">
						<CgCopyright color="white" />
						<Text color="white">All rights Reserved</Text>
					</HStack>
				</Stack>
			</Stack>
		</Center>
	);
}

export default Footer;
