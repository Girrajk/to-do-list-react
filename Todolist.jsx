import React from "react";

const Todolist = ({ tasks, handleDeleteTask }) => {
    return (
        <div>
            <ul>
                {tasks.map((task, index) => 
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(task)}>Delete Task</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todolist;