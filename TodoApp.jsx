import React, { useState } from "react";
import Todoinput from "../Components/Todoinput";
import Todolist from "../Components/Todolist";

const TodoApp=()=>{
    const [newTask,setNewTask]= useState("");
    const [tasks,setTasks] = useState([]);

    const handleAddTask = ()=>{
        if(newTask.trim()){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (deleteTask)=>{
        setTasks(tasks.filter((task)=> task !==deleteTask));
    };

    return(
        <div >
        <Todoinput 
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}

        />
        <Todolist tasks={tasks} handleDeleteTask={handleDeleteTask}  />        
        </div>
    );

};
export default TodoApp;
