import React, { Component } from 'react'
import "./Button.css"

export class Option extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
            selected: null
        }
    }

    render() {
        let className = "category_button";
        if (this.props.selected_category === this.state.id) {
            className += " selected_category_button"
        }

        return (
                <button className={className} onClick={this.props.onClick}>
                {this.state.name}
                </button>
        )
    }
}

export default Option
