import React, { Component } from 'react'

export default class Showing extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content: ""
    }
}

fetchImage(imageCategory, imageNumber){
    console.log("success")
}

fetchPoem(poemCategory, poemNumber) {
    fetch("assets/text/poems" + (poemCategory+1) + ".json")
    .then(response => {
        return response.json()
        })
    .then(
        (result) => {
            this.setState({
              title: result.poems[poemNumber].title,
              content: result.poems[poemNumber].content
            })
        }
    ).catch(err => {
        console.log("Error: " + err)
    })
}

render(){
    return (
      <div>
          <h1>{this.state.title}</h1>
          {this.state.content}
      </div>
    );
  }
}
