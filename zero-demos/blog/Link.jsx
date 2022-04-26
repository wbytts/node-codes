import React, { Component } from 'react'

export default class Link extends Component {
    render() {
        return (
            <div>
                <a href={this.props.href} target="_blank">{this.props.name}</a>
            </div>
        )
    }
}
