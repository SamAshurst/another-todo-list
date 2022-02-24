import "./App.css";
import ToDoTable from "./components/ToDoTable";
import ToDoForm from "./components/ToDoForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<h1>Todo List</h1>
			<h2>App</h2>
			<Header />
			<ToDoTable />
			<ToDoForm />
			<Footer />
		</div>
	);
}

export default App;
