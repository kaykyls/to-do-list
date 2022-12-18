import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
      <div className="app-bg">
        <div className="content">
          <TodoList/>
        </div>
      </div>
  );
}

export default App;
