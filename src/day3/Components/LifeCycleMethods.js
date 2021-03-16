import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red",
        }
        this.updateTxt = React.createRef()

    }
    componentDidMount() {
        console.log("didMount")

        setTimeout(() => {
            this.setState({ favoriteColor: "green" })
        }, 1000)
        console.log(this.state.favoriteColor)
    }
    componentDidUpdate() {
        console.log("dIdUpdate")
        this.updateTxt.current.innerHTML = "the updated color is: " + this.state.favoriteColor
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>my favorite color is: {this.state.favoriteColor}</h1>
                <div ref={this.updateTxt}></div>
            </div>
        )
    }
}
