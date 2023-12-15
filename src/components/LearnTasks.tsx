import { TTask } from '../@types/taskTypes'
import Task from './Task'

export default function LearnTasks({tasks} : {tasks: TTask[]}) {
    const renderedTasks = tasks.map(task => {
        return <Task key={task.id} task={task}/>
    })
    return (
        <div>
            <h1 className='text-center'>Learn Tasks</h1>
            {renderedTasks}
        </div>
    )
}
