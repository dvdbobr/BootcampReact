import React, { Component } from 'react'

export default class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div style={{ marginLeft: 45 + '%', marginTop: 5 + 'rem', fontSize: 3 + 'rem' }}>
                <button style={{ fontSize: 3 + 'rem' }} onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <span> {this.state.count}</span>
            </div>
        )
    }
}
