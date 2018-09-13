import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }
    }

    componentDidMount() {
        if (this.props.status === "Alive") {
            this.setState({ 
                time: this.state.time,
                start: Date.now() - this.state.time,
                isOn: true })
        } else {
            this.setState({ isOn: false })
        }
        this.resetTimer();
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
 
    resetTimer() {
        this.setState({ time: 0 })
    }
    render() {
        return (
            <div>
                <h3>timer: {this.state.time}</h3>
            </div>
        )
    }
}
export default Timer