import { Search2Icon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	Divider,
	Flex,
	InputGroup,
	InputLeftElement,
	Input,
	TableContainer,
	Thead,
	Tr,
	Table,
	Tbody,
	Td,
	Th,
	Button,
	Spacer,
} from '@chakra-ui/react';

export default function Transactions() {
	return (
		<Box p='1em'>
			<Heading color='#0077b6'>Transactions</Heading>
			<Divider />
			<Flex mt='1em' boxShadow='2xl' bg='#edf6f9' p='1em' borderRadius='8px'>
				<Box>
					<InputGroup color='blue'>
						<InputLeftElement children={<Search2Icon />} />
						<Input type='text' placeholder='Search Transaction' />
					</InputGroup>
				</Box>
				<Spacer />
				<Button colorScheme='facebook'>Add Transaction</Button>
			</Flex>
			<TableContainer mt='1em' boxShadow='2xl'>
				<Table variant='striped'>
					<Thead>
						<Tr>
							<Th>Transaction ID</Th>
							<Th>Date</Th>
							<Th>Type</Th>
							<Th>Details</Th>
							<Th>Amount</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>4</Td>
							<Td>2022-03-13</Td>
							<Td color='red'>Expense</Td>
							<Td>Date night</Td>
							<Td>350 EUR</Td>
						</Tr>
						<Tr>
							<Td>3</Td>
							<Td>2022-03-12</Td>
							<Td color='green'>Income</Td>
							<Td>Salary</Td>
							<Td>1337 EUR</Td>
						</Tr>
						<Tr>
							<Td>2</Td>
							<Td>2022-03-11</Td>
							<Td color='green'>Income</Td>
							<Td>Salary</Td>
							<Td>3000 EUR</Td>
						</Tr>
						<Tr>
							<Td>1</Td>
							<Td>2022-03-03</Td>
							<Td color='red'>Expense</Td>
							<Td>Subscriptions</Td>
							<Td>420 EUR</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}
