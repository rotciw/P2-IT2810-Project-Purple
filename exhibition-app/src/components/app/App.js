import React, { Component } from 'react'
import './App.css';
import ButtonContainer from "../buttonContainer/ButtonContainer.js"
import Showing from "../showing/Showing"

export class App extends Component {
  constructor(props){
    super(props);

    // Get previous button values from localStorage
    let localValues;
    if (localStorage.getItem("selectedImage")){
      localValues = [parseInt(localStorage.getItem("selectedImage")),parseInt(localStorage.getItem("selectedPoem")),parseInt(localStorage.getItem("selectedAudio")),parseInt(localStorage.getItem("selectedAlternative"))];
    }else{
      localValues = [0,0,0,0]
    }

    this.state = {
      categoryValues: [(0,"category 1"), (1,"category 2"), (2,"category 3")],
      categoryContainerValues: [(0, "Images"),(1, "Text"),(2,"Sound")],
      alternativeValues: [(0,"1"), (1,"2"), (2,"3"), (3,"4")],
      // [image, text, audio, alternative_nr]
      selectedValuesList: localValues,
    }
  }

  // Update exhibtion combination when component mounts
  componentDidMount(){
    this.updateCombination();
  }

  // Update exhibition combination according to selected values
  updateCombination(buttonGroupId=null){
    if (buttonGroupId === "0") {
      this.refs.setCombination.fetchImage(this.state.selectedValuesList[0], this.state.selectedValuesList[3])
    }else if (buttonGroupId === "1"){
      this.refs.setCombination.fetchPoem(this.state.selectedValuesList[1], this.state.selectedValuesList[3])
    }else if (buttonGroupId === "2"){
      this.refs.setCombination.fetchAudio(this.state.selectedValuesList[2], this.state.selectedValuesList[3])
    }else if (buttonGroupId === null || buttonGroupId === "3"){
      this.refs.setCombination.fetchImage(this.state.selectedValuesList[0], this.state.selectedValuesList[3])
      this.refs.setCombination.fetchPoem(this.state.selectedValuesList[1], this.state.selectedValuesList[3])
      this.refs.setCombination.fetchAudio(this.state.selectedValuesList[2], this.state.selectedValuesList[3])
    }
  }

  // Update state with selected button values
  setSelectedValue = (value, buttonGroupId) => {
    let selectedValuesList = this.state.selectedValuesList;
    if (selectedValuesList[buttonGroupId] !== value){
      selectedValuesList[buttonGroupId] = value;
      this.setState({
        selectedValuesList: selectedValuesList,
      })

      // Update localStorage with selected button values
      localStorage.setItem("selectedImage", this.state.selectedValuesList[0]);
      localStorage.setItem("selectedPoem", this.state.selectedValuesList[1]);
      localStorage.setItem("selectedAudio", this.state.selectedValuesList[2]);
      localStorage.setItem("selectedAlternative", this.state.selectedValuesList[3]);
      
      this.updateCombination(buttonGroupId)
    }
  }

render(){
    return (
        <div className="appContainer">
          <div className="header">
            <h1>exhibition: purple.</h1>
          </div>
          <div className="contentContainer">
            <div className="categories">
              <h2>1. Choose Image</h2>
              < ButtonContainer id="0" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={this.state.selectedValuesList[0]}/>
              <h2>2. Choose Text</h2>
              < ButtonContainer id="1" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={this.state.selectedValuesList[1]}/>
              <h2>3. Choose Audio</h2>
              < ButtonContainer id="2" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={this.state.selectedValuesList[2]}/>
              <h2>4. Choose Alternatives</h2>
              < ButtonContainer id="3" values={this.state.alternativeValues} selectedValue={this.setSelectedValue} selected={this.state.selectedValuesList[3]}/>
            </div>
            <div className="exhibition">
              <Showing ref="setCombination" />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
