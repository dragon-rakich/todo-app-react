import React from "react";
import './_heading.scss';

function Heading({title}) {
    return (
        <header className="header">
            <h1 className="heading">{title}</h1>
        </header>
    )
}

export default Heading;