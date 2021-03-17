import React, { Component } from 'react'

export default class FormBeforeSubmit extends Component {

    formSubmit = (e) => {
        e.preventDefault()
        this.props.showForm(false)
    }
    render() {
        return (
            <div >
                <form onSubmit={this.formSubmit}>
                    <label>First name:</label>
                    <input type={'text'} value={this.props.firstName} name={'firstName'} onChange={this.props.inputsHandler} /><br />
                    <label>Last name:</label>
                    <input type={'text'} value={this.props.lastName} name={'lastName'} onChange={this.props.inputsHandler} /><br />
                    <label>age:</label>
                    <input type={'number'} value={this.props.age} min={0} max={100} name={'age'} onChange={this.props.inputsHandler} /><br />
                    <label>Free text:</label>
                    <textarea value={this.props.freeTxt} name={'freeTxt'} onChange={this.props.inputsHandler} rows="1"></textarea><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
