import React, { Component } from 'react'


export default class FormAfterSubmit extends Component {
    constructor(props) {
        super(props)
    }
    buttonClicked=(e)=>{
        this.props.submitForm(e.target.value)
    }
    render() {
        return (
            <div>
            <h3>firstName: {this.props.firstName}</h3>
            <h3>lastName: {this.props.lastName}</h3>
            <h3>age: {this.props.age}</h3>
            <h3>txt: {this.props.freeTxt}</h3>
            <button value="back" onClick={this.buttonClicked}>Back</button>
            <button value="send" onClick={this.buttonClicked}>Send Survey</button>
            </div>
        )
    }
}
