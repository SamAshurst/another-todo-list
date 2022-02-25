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
	const [isChecked, setCompleted] = useState(false)

	const handleOnChange=()=>{
		setCompleted(!isChecked)
	}

	// const checkComplete = (task, checkboxValue) => {
	// 	if (checkboxValue){
	// 		return task.checkComplete = true
	// 	}
	// 	else {
	// 		return task.checkComplete = false
	// 	}
	// 	// return task.checkComplete = setCompleted(!checkboxValue)
	// 	}
	

	const addTask = (taskToAdd) =>
		setTasks((currentTasks) => {
			return [taskToAdd, ...currentTasks];
		});


	const taskToBeAdded = tasks.map((task) => {
		const taskObject = { ...task };

		return (
			<tr>
				<td key="checkbox">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleOnChange}
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
