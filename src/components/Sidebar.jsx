import {
	Heading,
	VStack,
	Box,
	Avatar,
	AvatarBadge,
	Flex,
	Button,
	Spacer,
	Divider,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
	let activeStyle = {
		color: 'white',
	};

	let defaultLinkStyle = {
		color: 'gray',
	};

	return (
		<VStack bg='#90e0ef' h='100vh'>
			<Box>
				<Heading color='white' p='1em'>
					Optimize.You
				</Heading>
			</Box>
			<Divider />
			<VStack
				as='nav'
				color='white'
				fontSize='2rem'
				spacing={10}
				textAlign='center'>
				<NavLink
					to='/'
					style={({ isActive }) => (isActive ? activeStyle : defaultLinkStyle)}>
					Dasboard
				</NavLink>
				<NavLink
					to='transactions'
					style={({ isActive }) => (isActive ? activeStyle : defaultLinkStyle)}>
					Transactions
				</NavLink>
				<NavLink
					to='tasks'
					style={({ isActive }) => (isActive ? activeStyle : defaultLinkStyle)}>
					Tasks
				</NavLink>
			</VStack>
			<Spacer />
			<Flex flexDir='column' alignItems='center' gap={4}>
				<Avatar size='lg'>
					<AvatarBadge bg='green' boxSize='1.25em' />
				</Avatar>
				<Button colorScheme='gray' mb='20px'>
					Log Out
				</Button>
			</Flex>
		</VStack>
	);
}
