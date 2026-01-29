import React, {useState} from "react";

import './_toDo.scss';

import Form from "../Form/Form";
import Task from "../Task/Task";

function ToDo() {
    const [tasks, setTasks] = useState(false);

    const API = "";

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
        let highestId = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id > highestId) {highestId = tasks.id}
        }
        return highestId + 1;
    }

    const toggleTask = async(task) => {
        const toggledTask = {...task, isDone: !task.isDone}
        try{
            await fetch(API, {
                method: "POST",
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
            console.log("POST error: " + err);
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