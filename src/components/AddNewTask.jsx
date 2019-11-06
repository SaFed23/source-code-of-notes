import React from "react";

class AddNewTask extends React.Component {
    constructor(props){
        super(props);

        this.inputName = React.createRef();

        this.state = {
            name: "",
            level: 1,
        }
    }

    componentDidMount() {
        this.inputName.current.focus();
    }

    createTask = event => {
        event.preventDefault();
        const task = {
            name: this.state.name,
            level: this.state.level,
        };
        this.props.addNewTask(task);
        this.setState({
            name: "",
            level: 1,
        });
    }

    setName = event => {
        this.setState({
            name: event.target.value,
        });
    }

    setLevel = level => {
        this.setState({
            level: level,
        })
    }

    render() {
        return (
            <div className="col-6">
                <form onSubmit={this.createTask}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="newTask" placeholder="New Task" 
                        value={this.state.name} onChange={this.setName} 
                        ref={this.inputName}/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="level" 
                        checked={this.state.level === 2} onChange={this.setLevel.bind(this, 2)}/>
                        <label className="form-check-label">
                            High
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="level" 
                        checked={this.state.level === 1} onChange={this.setLevel.bind(this, 1)}/>
                        <label className="form-check-label">
                            Medium
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="level" 
                        checked={this.state.level === 0} onChange={this.setLevel.bind(this, 0)}/>
                        <label className="form-check-label">
                            Low
                        </label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Add</button>
                    </form>
            </div>
        )
    }
}

export default AddNewTask;