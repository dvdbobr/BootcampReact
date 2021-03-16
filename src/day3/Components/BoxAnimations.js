import React, { Component } from 'react'

export default class BoxAnimations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changedClassName: ''
        }
    }

    componentDidMount() {
        this.setState({ changedClassName: "in" })
        setTimeout(() => {
            this.setState({ changedClassName: "out" })
        }, 4000)
    }

    render() {
        console.log("rendered")
        return (
            <div className={this.state.changedClassName}
                style=
                {{
                    width: this.props.widthSize,
                    height: this.props.heightSize,
                    backgroundColor: this.props.bgColor
                }}
            ></div>
        )
    }
}

