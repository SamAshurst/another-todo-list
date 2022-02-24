const ToDoTable = (prop) => {
	const task = prop.item


	function Table(task) {
		return <tr>
			<td><input type="checkbox"/></td>
			<td>{task.task}</td>
			<td>Some category</td>
			<td>{task.doBy}</td>
			<td>10 days left</td>
		</tr>

	}
	
	return (
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
					<Table Table={task}/>		
				</tbody>
			</table>
		</div>
	);
};

export default ToDoTable;
