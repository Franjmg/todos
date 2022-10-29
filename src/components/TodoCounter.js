import React from "react";

export default function TodoCounter({ completed, total }) {
    return(
        <h2 className="title">📝 Has completado {completed} de {total}</h2>
    )
}