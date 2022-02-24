const ToDoForm = (prop) => {

	return (
		<div>
			<form className="to-do-user-form" action ="" method ="get">
				<label htmlFor="Task">Task</label>
				<input
					type="text"
					id="input-task"
					placeholder="Enter your task here"
					className="input-task"
				></input>
				<label htmlFor="category-selection">select your category</label>
				<select id="available-categories" className="available-categories">
					<option value="work">Work</option>
					<option value="school">School</option>
					<option value="appointments">Appointments</option>
					<option value="chores">Chores</option>
					<option value="shopping">Shopping</option>
					<option value="uncategorised">Uncategorised</option>
				</select>
				<label htmlFor="complete-by">Complete by:</label>
				<input type="date" id="completeBy" className="completeBy"></input>
				<button type="submit" onClick={ToDo}>Submit your task!</button>
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
