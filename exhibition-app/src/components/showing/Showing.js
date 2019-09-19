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
    if (sessionStorage.getItem("image" + (imageCategory+1) + "_" + (imageNumber+1)) !== null){
        this.setState({image: sessionStorage.getItem("image" + (imageCategory+1) + "_" + (imageNumber+1))});
        console.log("Loaded image from sessionStorage");
    }else{
        fetch("assets/img/image" + (imageCategory+1) + "_" + (imageNumber+1) + ".svg")
        .then(response => response.text())
        .then(str => {
            this.setState({image: str});
            sessionStorage.setItem("image" + (imageCategory+1) + "_" + (imageNumber+1), str);
            console.log("Fetched image using AJAX Fetch API");
        })
    }
    
}

fetchPoem(poemCategory, poemNumber) {
    if (sessionStorage.getItem("poemTitle" + (poemCategory+1) + "_" + (poemNumber+1)) !== null){
        this.setState({poemTitle: sessionStorage.getItem("poemTitle" + (poemCategory+1) + "_" + (poemNumber+1))});
        this.setState({poemContent: sessionStorage.getItem("poemContent" + (poemCategory+1) + "_" + (poemNumber+1))});
        console.log("Loaded poem from sessionStorage");
    }else{
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
                sessionStorage.setItem("poemTitle" + (poemCategory+1) + "_" + (poemNumber+1), result.poems[poemNumber].title);
                sessionStorage.setItem("poemContent" + (poemCategory+1) + "_" + (poemNumber+1), result.poems[poemNumber].content);
                console.log("Fetched poem using AJAX Fetch API");
            }
        ).catch(err => {
            console.log("Error: " + err)
        })
    }
}
fetchAudio(audioCategory, audioNumber) {
    if (sessionStorage.getItem("audio" + (audioCategory+1) + "_" + (audioNumber+1)) !== null){
        let audioJSON = JSON.parse(sessionStorage.getItem("audio" + (audioCategory+1) + "_" + (audioNumber+1)));
        let audioElement = React.createElement('audio',{src:audioJSON.props.src, type:'audio/mpeg', controls:true},null)
        this.setState({audio: audioElement});
        console.log("Loaded audio from sessionStorage");
    }else{
        let element = React.createElement('audio',{src:('assets/audio/audio' + (audioCategory+1) + '_' + (audioNumber+1) + '.mp3'), type:'audio/mpeg', controls:true},null)
        this.setState({audio: element})
        sessionStorage.setItem("audio" + (audioCategory+1) + "_" + (audioNumber+1), JSON.stringify(element))
        console.log("Fetched audio using AJAX Fetch API");
    }
}

render(){
    return (
      <div>
          <div dangerouslySetInnerHTML={{__html: this.state.image}}></div>
          <h1>{this.state.poemTitle}</h1>
          <p>{this.state.poemContent}</p>
          {this.state.audio}
      </div>

    );
  }
}
