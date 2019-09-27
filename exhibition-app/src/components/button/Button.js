import React from 'react'
import "./Button.css"

export default function Button(props){
    let className = "category_button";

    if (!isNaN(props.name)){
        className += " alternative_button";
    }

    if (props.selected_category === props.id) {
        className += " selected_category_button"
    }


    return (
            <button className={className} onClick={props.onClick}>
            {props.name}
            </button>
    )
}
