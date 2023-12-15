import './App.css'
import TaskInput from './components/TaskInput'
import Tasks from './components/Tasks'
import { GlobalContextProvider } from './Context/GlobalContextProvider'

function App() {

  return (
    <GlobalContextProvider>
      <div>
        <TaskInput/>
        <Tasks/>
      </div>
    </GlobalContextProvider>
  )
}

export default App
