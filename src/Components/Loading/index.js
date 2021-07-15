import "./index.css";
import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = { step: 0, color: "red" }
    }

    updateStep = () => {
        this.setState((state) => {
            return { step: state.step + 1 }
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.updateStep, 100);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount ishladi");
        clearInterval(this.timer)
    }

    // 
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');

        if (nextState.step >= 100)
            clearInterval(this.timer);
        else if (nextState.step >= 30 && nextState.step < 70 && this.state.color != "yellow") {
            this.setState((state) => {
                return { color: "yellow" }
            })
        }
        else if (nextState.step >= 70 && this.state.color != "green") {
            this.setState((state) => {
                return { color: "green" }
            })
        }
    }

    render() {
        console.log("render ishladi");
        console.log(this.state);

        return (
            <div className="loading-panel">
                <div className="loading" style={{ width: `${this.state.step}%`, backgroundColor: this.state.color }}>{this.state.step}</div>
            </div>
        )
    }
}
