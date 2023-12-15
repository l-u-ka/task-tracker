import { FormEvent, useState } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext } from 'react'
import { TTask, Task_Type_Enum } from '../@types/taskTypes';
import { v4 as uuidv4 } from 'uuid';

export default function TaskInput() {
    const {setTasks} = useContext(GlobalContext)
    const [description, setDescription] = useState<string>('');
    const [type, setType] = useState<Task_Type_Enum>(Task_Type_Enum.LEARN);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (description) {
            const newTask:TTask = {
                id: uuidv4(),
                description,
                type,
            }
            setTasks(prev => [...prev, newTask])
            setDescription('')
            setType(Task_Type_Enum.LEARN);
        }
    }
    
  return (
    <form onSubmit={e => handleSubmit(e)} className='ml-[80px] my-3 flex'>
        <input placeholder='დავალების აღწერა' type='text' value={description} onChange={e => setDescription(e.target.value)} className='py-2'/>
        <select value={type} onChange={e => setType(e.target.value as Task_Type_Enum)} className='py-2'>
            <option value={Task_Type_Enum.LEARN}>{Task_Type_Enum.LEARN}</option>
            <option value={Task_Type_Enum.WORK}>{Task_Type_Enum.WORK}</option>
        </select>
        <button className='ml-1 px-3 border-[1px] border-solid border-violet-700  bg-violet-700 text-white rounded-[5px] hover:cursor-pointer'>დამატება</button>
    </form>
  )
}
