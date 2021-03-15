import React, { Component } from 'react';


class Classcomp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Classcomp