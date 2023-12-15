import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import { TTask, Task_Type_Enum } from "../@types/taskTypes";
import WorkTasks from "./WorkTasks";
import LearnTasks from "./LearnTasks";

export default function Tasks() {
    const {tasks} = useContext(GlobalContext);
    const learnTasks:TTask[] = tasks.filter(task => task.type === Task_Type_Enum.LEARN);
    const workTasks:TTask[] = tasks.filter(task => task.type === Task_Type_Enum.WORK);

    return (
        <div className="grid grid-cols-2">
            <LearnTasks tasks={learnTasks}/>
            <WorkTasks tasks={workTasks}/>
        </div>
    )
}
