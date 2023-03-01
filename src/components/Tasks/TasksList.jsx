import { SimpleGrid } from '@chakra-ui/react';
import { dummyTasks } from '../../../helpers/dummyTasks';
import TaskItem from '../TaskItem';

export default function TasksList() {
	return (
		<SimpleGrid columns={4} spacing={5} minChildWidth='250px'>
			{dummyTasks.map(item => {
				let importanceStyle;
				if (item.importance === 'asap') {
					importanceStyle = '#e63946';
				} else if (item.importance === 'schedule') {
					importanceStyle = '#0077b6';
				} else {
					importanceStyle = '#2a9d8f';
				}

				return (
					<TaskItem
						key={item.id}
						title={item.title}
						description={item.description}
						importance={item.importance.toUpperCase()}
						importanceStyle={importanceStyle}
					/>
				);
			})}
		</SimpleGrid>
	);
}
