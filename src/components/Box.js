import React from "react";

export default function Box(props) {
    return (
        <div className="box">
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
            <button>Leer más</button>
        </div>
    )
}