import './App.css';
import ContactListComponent from './components/container/contact_list';
// import TaskListComponent from './components/container/task_list';
// import GreetingF from './components/pure/greetingF';
// import Greetings from './components/pure/greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio greeting*/}
        {/* <Greetings name="1234" /> */}
        {/* <GreetingF name="Fred" /> */}
        {/* <TaskListComponent /> */}
        <ContactListComponent />
      </header>
    </div>
  );
}

export default App;
