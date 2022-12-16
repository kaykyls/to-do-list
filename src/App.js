import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
      <div className="app-bg">
        <div className="content">
          <h1>What's the plan for today?</h1>
          <TodoList/>
        </div>
      </div>
  );
}

export default App;
