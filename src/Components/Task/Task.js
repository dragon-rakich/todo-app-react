import React from "react";
import './_task.scss';

import Button from "../Button/Button";

function Task({task, onToggle, onDelete}) {
    return (
        <article className={(task.isDone) ? "task task--checked":"task"}>
            <h2 className={(task.isDone) ? "task__title task__title--checked":"task__title"} >{task.title}</h2>
            <div className="task__btns" >
                <Button 
                label={(task.isDone) ? "Undone":"Done"} 
                type={(task.isDone) ? "secondary-alt":"secondary"} 
                size="medium"
                fun={onToggle}
                />
                
                <Button 
                label="Remove"
                type="adjacent"
                size="medium"
                fun={onDelete}
                />
            </div>
        </article>
    )
}

export default Task;