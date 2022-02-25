import { useState } from "react";
import ToDoForm from "./ToDoForm";

const TaskList = () => {
	const [tasks, setTasks] = useState([
		{
			taskComplete: false,
			task: "Here's what a task will look like in your task-list!",
			category: "Shopping",
			date: "2022-03-01",
		},
	]);

	const checkComplete = (task, checkboxValue) => {
		return task.checkComplete = setComplete(checkboxValue)
		}
	};

	const addTask = (taskToAdd) =>
		setTasks((currentTasks) => {
			return [taskToAdd, ...currentTasks];
		});

	const calcDaysLeft = (taskDate) => {
		const date = new Date(taskDate);
		const milliseconds = date.getTime();
		const oneDay = 1000 * 60 * 60 * 24;
		const diffInTime = milliseconds - Date.now();
		const diffInDays = Math.round(diffInTime / oneDay);
		return diffInDays;
	};

	const taskToBeAdded = tasks.map((task) => {
		const taskObject = { ...task };
		console.log(task);

		return (
			<tr>
				<td key="checkbox">
					<input
						type="checkbox"
						checked={taskObject.taskComplete}
						onClick={(e) => checkComplete(task, e.target.checked)}
					/>
				</td>
				<td key={taskObject.task}>{taskObject.task}</td>
				<td key={taskObject.category}>{taskObject.category}</td>
				<td key={taskObject.date}>{taskObject.date}</td>
				<td key="Days remaining">{calcDaysLeft(taskObject.date)}</td>
			</tr>
		);
	});

	function Table() {
		return taskToBeAdded;
	}

	return (
		<>
			<div>
				<table className="to-do-table">
					<thead>
						<tr>
							<th>TaskList</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Task Complete</td>
							<td>Task</td>
							<td>Category</td>
							<td>To do by date</td>
							<td>Days left</td>
						</tr>
						<Table />
					</tbody>
				</table>
			</div>
			<ToDoForm addTask={addTask} />
		</>
	);
};

export default TaskList;
