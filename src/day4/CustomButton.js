import React, { Component } from 'react'

export default class CustomButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button
             onClick={this.props.click}
              style={{ backgroundColor: this.props.color }}
              value={this.props.value}
              >
                  
                  {this.props.color}</button>
        )
    }
}
