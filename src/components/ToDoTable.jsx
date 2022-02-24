const ToDoTable = () => {
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
					<tr>
						<td>Button for checklist</td>
						<td>Button user input text</td>
						<td>Drop down list</td>
						<td>Input type date</td>
						<td>Function remaining days</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ToDoTable;
