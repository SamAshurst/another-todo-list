import { useState } from "react";

const ToDoForm = (prop) => {
	const {addTask} = prop

	const [task, setTask] = useState("")
	const [category, setCategory] = useState("Uncategorised")
	const [date, setDate] = useState("")

	const handleSubmit = (event) =>{
		event.preventDefault()
		const newTask = { task, category, date}
		addTask(newTask)
		setCategory(category)
}

	return (
		<div>
			<form className="to-do-user-form" onSubmit={handleSubmit}>
				<label htmlFor="Task">Task</label>
				<input
					type="text"
					id="input-task"
					placeholder="Enter your task here"
					className="input-task"
					value={task}
					onChange={(e)=> setTask(e.target.value)}
				></input>
				<label htmlFor="category-selection">select your category</label>
				<select id="available-categories" className="available-categories" value={category} onChange={(e)=> setCategory(e.target.value)}>
				<option value="Uncategorised">Uncategorised</option>
					<option value="Work">Work</option>
					<option value="School">School</option>
					<option value="Appointments">Appointments</option>
					<option value="Chores">Chores</option>
					<option value="Shopping">Shopping</option>
					
				</select>
				<label htmlFor="complete-by">Complete by:</label>
				<input type="date" id="completeBy" className="completeBy" value={date} onChange={(e)=> setDate(e.target.value)}></input>
				<button type="submit">Submit your task!</button>
			</form>
		</div>
	);
};


export default ToDoForm;
