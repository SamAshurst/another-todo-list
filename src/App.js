import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h2>App</h2>
      <Header />
      <Tasklist />
      <Footer />
    </div>
  );
}

export default App;
