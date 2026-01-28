import React from "react";
import './_btn.scss';

function Button({label, type, size, fun, isSubmit}) {
    let className = "btn" + " btn--" + type + " btn--" + size;    

    const handleClick = (e) => {
        if (typeof(fun) === "function") {
            fun();
        }
    }
    return (
        <button onClick={handleClick} className={className} type={(isSubmit) ? "submit":"button"}>{label}</button>
    )
}

export default Button;