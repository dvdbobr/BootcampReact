import React, { Component } from 'react'

export default class BoxColorAndShape extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            r: 0,
            g: 0,
            b: 0,
            counter: 0,
            radius: 0
        }
    }
    componentDidMount() {
        let interval = setInterval(() => {
            this.setState({
                r: Math.floor((Math.random() * 255)),
                g: Math.floor((Math.random() * 255)),
                b: Math.floor((Math.random() * 255))
            })
            this.setState({ color: `${this.state.r}, ${this.state.g}, ${this.state.b}` })
            this.setState({ counter: this.state.counter + 1 })
            if (this.state.counter == 5) {
                clearInterval(interval)
                this.setState({ radius: 50 })
            }
        }, 1000);
    }
    colorChange = () => {
        this.setState({
            r: Math.floor((Math.random() * 255)),
            g: Math.floor((Math.random() * 255)),
            b: Math.floor((Math.random() * 255))
        })
        this.setState({ color: `(${this.state.r}, ${this.state.g}, ${this.state.b})` })
    }
    render() {
        return (
            <div style={{ width: 400, height: 400, backgroundColor: `rgb(${this.state.color})`, borderRadius: this.state.radius + '%' }}>

            </div>
        )
    }
}
