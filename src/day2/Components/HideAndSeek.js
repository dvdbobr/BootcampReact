import React, { Component } from 'react'
import HideBox from './HideBox';

export default class HideAndSeek extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, message: 'hi there' };
    }
    showAndHide = () => {
        console.log(this.state.show)
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div style={{ marginLeft: 600 }}>
                <h1>{this.state.message}</h1>
                <button onClick={this.showAndHide}>show/hide</button>
                <div>
                    {this.state.show ? <HideBox /> : null}
                </div>
            </div>
        )
    }
}
