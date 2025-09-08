import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div style={{maxWidth:700,margin:"2rem auto",fontFamily:"Arial,sans-serif"}}>
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App
