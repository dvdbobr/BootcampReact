import { Component } from 'react';


export default class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <img src={this.props.url}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="links">
                    <a href={this.props.shareLink}>SHARE</a>
                    <a href={this.props.exploreLink}>EXPLORE</a>
                </div>
            </div>
        )
    }
}