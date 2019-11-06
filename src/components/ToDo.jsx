import React from "react";

function setColor(task) {
    let color = "list-group-item";
    if (task.level === 2) {
        color += " list-group-item-danger";
    } else if (task.level === 1) {
        color += " list-group-item-warning";
    } else {
        color += " list-group-item-success";
    }
    return color;
}

function ToDo(props) {
    return(
        <div className="col-6">
            <ul className="list-group">
                <li className="list-group-item active">ToDo List</li>
                {props.tasks.map(task => {
                    return (
                        <div key={task.id}>
                            <li className={setColor(task)}>{task.name}</li>
                        </div>
                        );
                })}
            </ul>
        </div>
    )
}

export default ToDo;