import {
	Drawer,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Stack,
	FormLabel,
	Box,
	Input,
	Textarea,
	Select,
	DrawerFooter,
	Button,
} from '@chakra-ui/react';
import React from 'react';

export default function AddTaskForm(props) {
	return (
		<Drawer isOpen={props.isOpen} placement='right' onClose={props.onClose}>
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Add New Task</DrawerHeader>
				<DrawerBody>
					<Stack>
						<Box>
							<FormLabel htmlFor='title'>Title</FormLabel>
							<Input id='title' placeholder='Enter a task title'></Input>
						</Box>
						<Box>
							<FormLabel htmlFor='details'>Details</FormLabel>
							<Textarea id='details' placeholder='Details'></Textarea>
						</Box>
						<Box>
							<FormLabel htmlFor='importance'>Importance</FormLabel>
							<Select id='importance'>
								<option value='option1'>Option 1</option>
								<option value='option2'>Option 2</option>
								<option value='option3'>Option 3</option>
							</Select>
						</Box>
					</Stack>
				</DrawerBody>
				<DrawerFooter gap={2}>
					<Button variant='outline' onClick={props.onClose}>
						Cancel
					</Button>
					<Button colorScheme='blue' onClick={props.onClose}>
						Submit
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
