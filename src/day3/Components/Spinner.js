import React, { Component } from 'react'

export default class Spinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }
    render() {
        this.state.isLoaded === false ?
            <div className="spinner">

            </div> : console.log("true")
        return (
            <div>

            </div>
        )
    }
}
