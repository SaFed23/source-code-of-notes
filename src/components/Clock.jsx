import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: (new Date()).toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(this.setTime, 1000);
    }

    setTime = () => {
        this.setState({
            time: (new Date()).toLocaleTimeString()
        });
    }

    render() {        
        return (
            <div className="col-12" style={{textAlign: "center"}}>
                {this.state.time}
            </div>
        )
    }
}

export default Clock;