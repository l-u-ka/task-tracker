import { useContext } from "react";
import { TTask } from "../@types/taskTypes";
import { GlobalContext } from "../Context/GlobalContext";
import { useState } from "react";

export default function Task({task} : {task: TTask}) {
    const {tasks, setTasks} = useContext(GlobalContext)
    const [isDone, setIsDone] = useState(false)
    function deleteTask(taskId:string) {
        const filteredTasks = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTasks)
    }
    function doTask() {
        if (isDone) setIsDone(false);
        else setIsDone(true);
    }

    return (
        <div className={`w-[500px] border-black border-solid border-6  rounded-[5px] my-4 mx-auto p-2 ${isDone && "bg-gray-100"}`}>
            <p className="text-[24px] mb-4">{task.description}</p>
            <div className="flex ">
                <button className="py-1.5 w-[80px] border-none bg-red-600 rounded-[5px] mr-2 text-white hover:cursor-pointer" onClick={() => deleteTask(task.id)}>Delete</button>
                <button className="py-1.5 w-[80px] border-none bg-green-600 rounded-[5px] text-white hover:cursor-pointer" onClick={doTask}>{isDone ? 'Undone' : 'Done'}</button>    
            </div>
        </div>
  )
}
