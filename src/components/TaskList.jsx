import { useState } from "react";
import ToDoForm from "./ToDoForm";
import calcDaysLeft from "../utils/calcDaysLeft";

const TaskList = () => {
	const [tasks, setTasks] = useState([
		{
			taskComplete: false,
			task: "Here's what a task will look like in your task-list!",
			category: "Shopping",
			date: "2022-03-01",
		},
	]);
	const [isChecked, setCompleted] = useState(false);

	const handleOnChange = () => {
		setCompleted(!isChecked);
	};

	const addTask = (taskToAdd) =>
		setTasks((currentTasks) => {
			return [taskToAdd, ...currentTasks];
		});

	const taskToBeAdded = tasks.map((task, index) => {
		const taskObject = { ...task };

		return (
			<tr key={index}>
				<td className="checkbox-class" key={`${index} checkbox`}>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleOnChange}
					/>
				</td>
				<td className="task-class" key={taskObject.task}>
					{taskObject.task}
				</td>
				<td className="category-class" key={taskObject.category}>
					{taskObject.category}
				</td>
				<td className="task-tbc-class" key={taskObject.date}>
					{taskObject.date}
				</td>
				<td
					className="task-days-remaining-class"
					key={`${index} days remaining`}
				>
					{calcDaysLeft(taskObject.date)}
				</td>
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
					<tbody>
						<tr>
							<td className="checkbox-class-header">Task Complete</td>
							<td className="task-class-header">Task</td>
							<td className="category-class-header">Category</td>
							<td className="task-tbc-class-header">To do by date</td>
							<td className="task-days-remaining-class-header">Days left</td>
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

// const checkComplete = (task, checkboxValue) => {
// 	if (checkboxValue){
// 		return task.checkComplete = true
// 	}
// 	else {
// 		return task.checkComplete = false
// 	}
// 	// return task.checkComplete = setCompleted(!checkboxValue)
// 	}
