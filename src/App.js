import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

function App() {
	return (
		<div className="App">
			<h1>Todo List</h1>
			<h2>App</h2>
			<Header />
			<TaskList />
			<Footer />
		</div>
	);
}

export default App;
