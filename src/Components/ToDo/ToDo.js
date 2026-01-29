import React, {useState, useEffect} from "react";

import './_toDo.scss';

import Form from "../Form/Form";
import Task from "../Task/Task";

function ToDo() {
    const [tasks, setTasks] = useState(false);

    const API = "http://localhost:3000/tasks";


    const fetchTasks = async() => {
        try {
            console.log("beep");
            const resp = await fetch(API, {method: "GET"});
            const data = await resp.json();
            setTasks(data);
        } catch(err) {
            console.log(err);
        }
    }

    const addTask = async(taskTitle) => {
        console.log(taskTitle);
        const addedTask = {title: taskTitle, isDone: false}
        addedTask.id = calculateId();
        
        try{
            await fetch(API, {
                method: "POST",
                body: JSON.stringify(addedTask),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setTasks(prev => [...prev, addedTask])
        } catch(err) {
            console.log("POST error: " + err);
        }
    }

    const calculateId = () => {
        console.log("calculate id")
        let highestId = 0;
        for (let i = 0; i < tasks.length; i++) {
            console.log("i: " + i + ", id: " + tasks[i].id);
            console.log("id is a " + typeof(tasks[i].id));
            if (Number(tasks[i].id) > highestId) {highestId = Number(tasks[i].id)}
        }

        console.log("highest id: " + highestId);
        return highestId + 1;
    }

    const toggleTask = async(task) => {
        console.log(task);
        const toggledTask = {...task, isDone: !task.isDone}
        try{
            await fetch(API + "/" + task.id, {
                method: "PUT",
                body: JSON.stringify(toggledTask),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setTasks(prev => {
                const newTasks = [];
                for (let i = 0; i < prev.length; i++) {
                    if (prev[i].id !== toggledTask.id) {
                        newTasks.push(prev[i]);
                    } else {
                        newTasks.push(toggledTask);
                    }
                }
                return newTasks;
            })

        } catch(err) {
            console.log("toggle task error: " + err);
        }

    }

    const deleteTask = async(task) => {
        const id = task.id;
        try{
            await fetch(API + "/" + task.id, {method: "DELETE"})

            setTasks(prev => prev.filter((task) => task.id !== id ))
        } catch(err) {
            console.log("POST error: " + err);
        }

    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <section className="toDo">
            <Form onAddTask={addTask} />
            <div className="toDo__tasks">
                {(!tasks) && <p>Loading data.....</p>}
                {(tasks) && <ul>
                    {tasks.map((task) => {
                        return <li key={task.id}>
                            <Task task={task} onToggle={() => {toggleTask(task)}} onDelete={() => {deleteTask(task)}} />
                        </li>
                    })}
                    </ul>
                }
            </div>
        </section>
    )
}

export default ToDo;