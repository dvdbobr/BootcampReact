import React, { Component } from 'react'

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
        };
    }
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }
    render() {
        return (
            <div>
                <label>
                    <input type="checkbox"
                        defaultChecked={this.props.isChecked}
                        onChange={this.toggleChange}
                    />
                    {this.props.txt}
                </label>
            </div>
        )
    }
}
