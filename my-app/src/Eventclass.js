import React, { Component } from 'react';


class Eventclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            textcont: ""
        }
    }


    incrimenthandler = () => {
        this.setState((prev, props) => ({ counter: prev.counter + 1 }))

    }
    decrementhandler = () => {
        this.setState((prev, props) => ({ counter: prev.counter - 1 }))

    }
    textchangeevent = (e) => {
        this.setState({ textcont: e.target.value })

    }
    render() {
        return (
            <div>
                <button onClick={this.incrimenthandler}>+</button>
                <button onClick={this.decrementhandler}>-</button>
                <p>value : {this.state.counter}</p>
                <input type="text" onChange={this.textchangeevent} />
                <bt />
                <p> value is : {this.state.textcont}</p>
            </div>

        )
    }
}


export default Eventclass