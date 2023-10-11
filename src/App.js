import "./App.css";
import { TodoList } from "./components/todos";
import icon from "./icon.png";

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          TodoList <img src={icon} />
        </h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
