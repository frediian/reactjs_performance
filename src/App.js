import './App.css';
import TaskListComponent from './components/container/task_list';
// import GreetingF from './components/pure/greetingF';
// import Greetings from './components/pure/greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio greeting*/}
        {/* <Greetings name="1234" /> */}
        {/* <GreetingF name="Fred" /> */}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
