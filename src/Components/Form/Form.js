import React, {useState} from "react";
import './_form.scss';

import Button from "../Button/Button";

function Form({onAddTask}) {
    const [taskTitle, setTaskTitle] = useState("")

    const handleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onAddTask === "function") {
            onAddTask(taskTitle);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" value={taskTitle} onChange={handleChange} className="form__input" placeholder="Add a task" />
            <Button 
            label="Add Task"
            type="primary"
            size="large"
            isSubmit={true}
            />
        </form>
    )
}

export default Form;