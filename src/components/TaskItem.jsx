import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Text,
} from '@chakra-ui/react';

export default function TaskItem(props) {
	return (
		<Card borderTop='8px' borderColor='#caf0f8' align='center' minH='300px'>
			<CardHeader textAlign='center'>
				<Heading>{props.title}</Heading>
				<Text color={props.importanceStyle} fontSize='1.2rem'>
					{props.importance}
				</Text>
			</CardHeader>
			<CardBody>
				<Text>{props.description}</Text>
			</CardBody>
			<ButtonGroup gap={1} mb='1em'>
				<Button colorScheme='blue'>Edit</Button>
				<Button colorScheme='green'>Done</Button>
			</ButtonGroup>
		</Card>
	);
}
