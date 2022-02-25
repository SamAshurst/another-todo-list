const Header = () => {
	return (
		<div>
			<h1>Welcome to Another ToDo List</h1>
			<h2>To use the app:</h2>
			<div className="instructions">
				<p>
					Task Complete: This is a checkbox which allows you to mark tasks as
					complete.
				</p>
				<p>Task: Please enter your task into the task box.</p>
				<p>
					Category: These are currently pre-defined, please select a category
					relevant to your task.
				</p>
				<p>
					To do by date: Please select the date by which you are to complete the
					task
				</p>
				<p>
					Days left: This is auto-calculated based upon the current date and the
					date you inputted into the to do by date column.
				</p>
			</div>
		</div>
	);
};

export default Header;
