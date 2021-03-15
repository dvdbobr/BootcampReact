import { Component } from 'react';


export default class Cards extends Component {

    render() {
        return (
            <div className="container">
                <img src={this.props.url} alt=""></img>
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