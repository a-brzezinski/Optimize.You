import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function RootLayout() {
	return (
		<Grid templateColumns='repeat(6,1fr)' minH='100vh'>
			<GridItem as='aside' colSpan={{ base: 6, lg: 2, xl: 1 }}>
				<Sidebar />
			</GridItem>
			<GridItem as='main' colSpan={{ base: 6, lg: 4, xl: 5 }}>
				<Outlet />
			</GridItem>
		</Grid>
	);
}
