import { Component } from 'react';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <button style={{fontWeight:this.props.weight}}>{this.props.btnText}</button>
        )
    }
}