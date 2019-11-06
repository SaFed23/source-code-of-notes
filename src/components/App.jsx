import React from "react";
import Clock from "./Clock";
import AddNewTask from "./AddNewTask";
import ToDo from "./ToDo";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            currentId: 0,
        }
    }

    addNewTask = (task) => {
        task.id = this.state.currentId;
        const updateTasks = [...this.state.tasks, task];
        let updateId = this.state.currentId;
        this.setState({
            tasks: updateTasks,
            currentId: ++updateId,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Clock />
                    <ToDo tasks={this.state.tasks}/>
                    <AddNewTask addNewTask={this.addNewTask}/>
                </div>
            </div>
        )
    }
}

export default App