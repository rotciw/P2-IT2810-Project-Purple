import React, { Component } from 'react'
import Button from "../button/Button.js"
import "./ButtonContainer.css"

export class ButtonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null,
        }
    }
    handleClick(i){
        let selected_category = i;
        this.setState({
            selected: selected_category,
        });
        console.log(this.state.selected)
    }

    renderButton(i, name){
        return(
            < Button 
                id = {i}
                name={name}
                onClick={() => this.handleClick(i)}
                selected_category = {this.state.selected}
            />
        )
    }

    render() {
        return (
            <div>
                {this.renderButton(0, "kategori_1")}
                {this.renderButton(1, "kategori_2")}
                {this.renderButton(2, "kategori_3")}
            </div>
        )
    }
}

export default ButtonContainer