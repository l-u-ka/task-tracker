import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { TTask } from "../@types/taskTypes";

export function GlobalContextProvider({children} : {children: React.ReactNode}) {
    const [tasks, setTasks] = useState<TTask[]>([]);
    return <GlobalContext.Provider value={{tasks, setTasks}}>
        {children}
    </GlobalContext.Provider>
}