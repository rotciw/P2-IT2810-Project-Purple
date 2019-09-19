import React, { Component } from 'react'

export default class Showing extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            poemTitle: "",
            poemContent: "",
            audio: null,
        }
}

fetchImage(imageCategory, imageNumber){
    fetch("assets/img/image" + (imageCategory+1) + "_" + (imageNumber+1) + ".svg")
    .then(response => response.text())
    .then(str => this.setState({image: str}))
}

fetchPoem(poemCategory, poemNumber) {
    fetch("assets/text/poems" + (poemCategory+1) + ".json")
    .then(response => {
        return response.json()
        })
    .then(
        (result) => {
            this.setState({
              poemTitle: result.poems[poemNumber].title,
              poemContent: result.poems[poemNumber].content
            })
        }
    ).catch(err => {
        console.log("Error: " + err)
    })
}
fetchAudio(audioCatagory, audioNumber) {
    let element = React.createElement('audio',{src:('assets/audio/audio' + (audioCatagory+1) + '_' + (audioNumber+1) + '.mp3'), type:'audio/mpeg', controls:true},null)
    this.setState({audio:element})
}

render(){
    return (
      <div>
          <div dangerouslySetInnerHTML={{__html: this.state.image}}></div>
          <h1>{this.state.poemTitle}</h1>
          {this.state.poemContent}
          {this.state.audio}
      </div>

    );
  }
}
