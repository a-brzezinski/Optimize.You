import { AddIcon } from '@chakra-ui/icons';
import {
	Grid,
	GridItem,
	TabList,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	Button,
	useDisclosure,
	Box,
	Heading,
	Divider,
	Text,
} from '@chakra-ui/react';
import AddTaskForm from '../components/Tasks/AddTaskForm';
import TasksList from '../components/Tasks/TasksList';

export default function Tasks() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box p='1em'>
			<Heading color='#0077b6'>Tasks</Heading>
			<Divider />
			<Grid templateColumns='repeat(6,1fr)'>
				<GridItem colSpan={6}>
					<Button
						leftIcon={<AddIcon />}
						m='1em 0'
						colorScheme='facebook'
						onClick={onOpen}>
						Add Task
					</Button>
					<Tabs variant='enclosed' colorScheme='black' isFitted>
						<TabList>
							<Tab
								_selected={{ bg: '#48cae4', color: 'white' }}
								fontWeight='bold'>
								To do
							</Tab>
							<Tab
								_selected={{ bg: '#48cae4', color: 'white' }}
								fontWeight='bold'>
								Done
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<TasksList />
							</TabPanel>
							<TabPanel>
								<Text textAlign='center' fontSize='2em'>
									Here are your completed tasks.
								</Text>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</GridItem>
				<AddTaskForm isOpen={isOpen} onClose={onClose} />
			</Grid>
		</Box>
	);
}
