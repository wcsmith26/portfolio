import React, { Component } from 'react'

export default class Project extends Component {
    render(props) {
        return (
            <div className="relative mx-auto bg-white rounded-2xl p-5 w-80 h-80 mb-10">
                <a className="text-center text-2xl">
                    {this.props.name}
                </a>
                <img className="items-center mx-auto h-60 w-60" src={this.props.path}></img>
            </div>
        )
    }
}

