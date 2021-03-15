import React, { Component } from 'react';


class Counterclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increment() {
        // this.setState({
        //     counter:5
        // })
        setTimeout(() => {
            this.setState((prev, props) => ({ counter: prev.counter + 1 }))
        }, 100000)

    }
    render() {
        this.increment()
        return (
            <div>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}


export default Counterclass