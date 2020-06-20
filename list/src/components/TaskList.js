import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
//recorring array 
    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} />;
                    })}
                </ul>
            ) : (
                    <div className="no-tasks">No Pending Task</div>
                )}
        </div>
    );
};

export default TaskList;
