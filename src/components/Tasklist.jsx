import { useState } from "react";
import ToDoForm from "./ToDoForm";




const Tasklist = () => {

    const [tasks, setTasks] = useState([{task: "Shopping", category: "Shopping", date: "01/03/2022"}])
	
    const addTask = (taskToAdd) =>
    setTasks((currentTasks)=>{
        return [taskToAdd, ...currentTasks]
    })
    console.log(tasks)

	function Table() {
		return <tr>
			<td><input type="checkbox"/></td>
			<td>task</td>
			<td>Some category</td>
			<td>Do by</td>
			<td>10 days left</td>
		</tr>

	}
	
	return (
        <>
		<div>
			<table className="to-do-table">
				<thead>
					<tr>
						<th>Tasklist</th>
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
        <ToDoForm  addTask={addTask}/>
        </>
	);
};

export default Tasklist