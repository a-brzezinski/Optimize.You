import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
} from '@chakra-ui/react';

export default function Dashboard() {
	return (
		<Box p='1em'>
			<Heading color='#0077b6'>Dashboard</Heading>
			<Divider />
			<Grid
				templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(6,1fr)' }}
				gridTemplateRows={{ base: 'repeat(4,1fr', md: 'repeat(6,1fr)' }}
				gap={2}
				mt='2em'>
				<GridItem colSpan={{ base: 1, xl: 2 }} rowSpan={{ base: 2, xl: 4 }}>
					<Flex
						borderRadius='8px'
						border='1px'
						borderColor='#edf6f9'
						p='1em'
						boxShadow='2xl'
						flexDir='column'
						alignItems='center'>
						<Text fontSize='2rem'>Tasks Progress</Text>
						<CircularProgress value={40} thickness='12px' size='140px'>
							<CircularProgressLabel>40%</CircularProgressLabel>
						</CircularProgress>
					</Flex>
				</GridItem>
				<GridItem
					colSpan={{ base: 1, md: 4 }}
					rowSpan={{ base: 1, md: 2, xl: 4 }}
					boxShadow='2xl'
					border='1px'
					borderRadius='8px'
					borderColor='#edf6f9'>
					<Flex
						textAlign='center'
						h='100%'
						flexDirection={{ base: 'column', lg: 'row' }}
						alignItems='center'>
						<Stat>
							<StatLabel fontSize='2rem' color='tomato'>
								Expenses
							</StatLabel>
							<StatNumber>-€450.00</StatNumber>
							<StatHelpText>Feb 1 - Feb 28</StatHelpText>
						</Stat>
						<Divider orientation='vertical' />
						<Stat>
							<StatLabel fontSize='2rem' color='#0077b6'>
								Incomes
							</StatLabel>
							<StatNumber>€+2100.37</StatNumber>
							<StatHelpText>Feb 1 - Feb 28</StatHelpText>
						</Stat>
						<Divider orientation='vertical' />
						<Stat>
							<StatLabel fontSize='2rem' color='#2a9d8f'>
								Total Money
							</StatLabel>
							<StatNumber>€3200.14</StatNumber>
						</Stat>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}
