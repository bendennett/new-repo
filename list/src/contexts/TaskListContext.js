import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState(null)

    // adding a task impoting id
    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    //removing a Tasking a task to compare
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // clear all array
    const clearList = () => {
        setTasks([])
    }

    // encuentra las tareas
    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    // Editing tasks
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
