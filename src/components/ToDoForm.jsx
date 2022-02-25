import { useState } from "react";

const ToDoForm = () => {

	const [task, setTask] = useState("")
	const [category, setCategory] = useState("")
	const [date, setDate] = useState("")

	const handleSubmit = (event) =>{
		event.preventDefault()
		console.log(event)
		
		
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
					<option value="work">Work</option>
					<option value="school">School</option>
					<option value="appointments">Appointments</option>
					<option value="chores">Chores</option>
					<option value="shopping">Shopping</option>
					<option value="uncategorised">Uncategorised</option>
				</select>
				<label htmlFor="complete-by">Complete by:</label>
				<input type="date" id="completeBy" className="completeBy" value={date} onChange={(e)=> setDate(e.target.value)}></input>
				<button type="submit">Submit your task!</button>
			</form>
		</div>
	);
};

const ToDo = (event) =>{
	console.log("Clicked")
	console.log(event.target.value)
	event.preventDefault()
}


// Event listener for submit
// Add to the ToDoTable
// -Adds a checkbox
// -Add the days remaining 

export default ToDoForm;
