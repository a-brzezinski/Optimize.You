import { Flex, Heading, HStack, Spacer, Box, Text } from '@chakra-ui/react';

export default function Navbar() {
	return (
		<Flex as='nav' bg='#edf6f9' p='10px' mb='20px'>
			<Box>
				<Heading as='h4' fontWeight='light' fontSize='3rem'>
					Welcome Jonah
				</Heading>
			</Box>
		</Flex>
	);
}
