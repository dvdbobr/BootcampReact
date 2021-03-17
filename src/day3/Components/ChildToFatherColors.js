import React, { Component } from 'react'
import CustomButton from './CustomButton';

export default class ChildToFatherColors extends Component {
    constructor(props) {
        super(props)
        this.state = { color: '', value: '' }
    }
    handleClick = (e) => {
        this.setState({value: e.target.value})
    }
    render() {
        const colors = ["blue", "red", "yellow"];
        return (
            <div>
                {
                    colors.map((c) => {
                        return (
                            <CustomButton click={this.handleClick} color={c} value={c} />
                        )
                    })
                }
                <div>the color selected is: {this.state.value}</div>
            </div>
        )
    }
}
