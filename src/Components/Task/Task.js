import React from "react";
import './_task.scss';

function Task({task, children}) {
    return (
        <article className={(task.isDone) ? "task task--checked":"task"}>
            <h2 className={(task.isDone) ? "task__title task__title--checked":"task__title"} >{task.title}</h2>
            <div className="task__btns" >
                {children}
            </div>
        </article>
    )
}

export default Task;