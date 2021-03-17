import React, { Component } from 'react'
import FormAfterSubmit from './FormAfterSubmit';
import FormBeforeSubmit from './FormBeforeSubmit';

export default class FormReview extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: 0,
        freeTxt: '',
        userData: [],
        showForm: true
    }
    inputsHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.name, e.target.value)
    }
    showForm = (e) => {
        this.setState({ showForm: e })
    }
    submitForm = (e) => {
        if (e === 'send') {
            let data = [];
            data.push({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                freeTxt: this.state.freeTxt
            })
            console.log(data)
            this.setState({
                firstname: '',
                lastname: '',
                age: '',
                freeTxt: '',
                userData: data,
                showForm: true
            })

            console.log(this.state.userData)

        }
        else {
            this.setState({ showForm: true })
        }
    }
    render() {
        let form;

        if (this.state.showForm) {
            form =
                <FormBeforeSubmit
                    inputsHandler={this.inputsHandler}
                    showForm={this.showForm}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    freeTxt={this.state.freeTxt}>
                </FormBeforeSubmit>
        } else {
            form =
                <FormAfterSubmit
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    freeTxt={this.state.freeTxt}
                    submitForm={this.submitForm}>
                </FormAfterSubmit>
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center',marginTop:50 }}>
                { form}
            </div>
        )
    }
}
