import "./index.css";
import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);

        console.log("constructor ishladi");
        this.state = { time: new Date() }
        // this.updateTime()
    }

    updateTime = () => {
        this.setState((state) => {
            return { time: new Date() }
        })
    }

    componentDidMount() {
        console.log("componentDidMount ishladi");

        this.timer = setInterval(this.updateTime, 3000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount ishladi");
        clearInterval(this.timer)
    }

    //
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log(nextState.time.getSeconds(), this.state.time.getSeconds());
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
        console.log(prevState.time.getSeconds(), this.state.time.getSeconds());
    }

    render() {
        console.log("render ishladi");
        // console.log(this.state);
        // console.log(this.timer);

        return (
            <div className="clock">
                <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
            </div>
        )
    }
}
