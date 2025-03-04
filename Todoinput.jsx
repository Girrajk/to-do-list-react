import React from "react";
import "./Todo.css";

const Todoinput = ({ newTask, setNewTask, handleAddTask }) => {
    return (
        
            <div className="container">
                <h1>Responsive To-Do List</h1>
                <input id="inp"
                    type="text"
                    placeholder="Add anew Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button id="btn" onClick={handleAddTask}>Add</button>
            </div>
       

    );
};

export default Todoinput;