import React, { Component } from 'react'
import Button from "../button/Button.js"
import "./ButtonContainer.css"

export default class ButtonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected,
        }
    }
    handleClick(i){
        let selected_category = i;
        this.setState({
            selected: selected_category,
        });
        this.props.selectedValue(selected_category, this.props.id)
        console.log(this.props.id)
    }

    renderButtons(values){
        return(
            values.map((name, i) =>
                < Button
                    key={i}
                    id={i}
                    name={name}
                    onClick={() => this.handleClick(i)}
                    selected_category = {this.state.selected}
                />
            )
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons(this.props.values)}
            </div>
        )
    }
}
