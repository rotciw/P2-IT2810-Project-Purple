import React, { Component } from 'react'
import './App.css';
import ButtonContainer from "../buttonContainer/ButtonContainer.js"
import Showing from "../showing/Showing"

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryValues: [(0,"category_1"), (1,"category_2"), (2,"category_3")],
      categoryContainerValues: [(0, "Images"),(1, "Text"),(2,"Sound")],
      alternativeValues: [(0,"1"), (1,"2"), (2,"3"), (3,"4")],
      // [image, text, audio, alternative_nr]
      selectedValuesList: [0, 0, 0, 0],
    }
  }

  componentDidMount(){
    this.updateCombination();
  }

  updateCombination(buttonGroupId=null){
    if (buttonGroupId === "0") {
      this.refs.setCombination.fetchImage(this.state.selectedValuesList[0], this.state.selectedValuesList[3])
    }else if (buttonGroupId === "1"){
      this.refs.setCombination.fetchPoem(this.state.selectedValuesList[1], this.state.selectedValuesList[3])
    }else if (buttonGroupId === "2"){
      //this.refs.setCombination.fetchAudio(this.state.selectedValuesList[2], this.state.selectedValuesList[3])
    }else if (buttonGroupId === null || buttonGroupId === "3"){
      this.refs.setCombination.fetchImage(this.state.selectedValuesList[0], this.state.selectedValuesList[3])
      this.refs.setCombination.fetchPoem(this.state.selectedValuesList[1], this.state.selectedValuesList[3])
      //this.refs.setCombination.fetchAudio(this.state.selectedValuesList[2], this.state.selectedValuesList[3])
    }
  }

  setSelectedValue = (value, buttonGroupId) => {

    let selectedValuesList = this.state.selectedValuesList;
    if (selectedValuesList[buttonGroupId] !== value){
      selectedValuesList[buttonGroupId] = value;
      this.setState({
        selectedValuesList: selectedValuesList,
      })
      this.updateCombination(buttonGroupId)
    }
  }

render(){
    return (
        <div className="appContainer">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <div className="header">
            <h1>Project 2: Exhibition app</h1>
          </div>
          <div className="contentContainer">
            <div className="categories">
              <p>Images</p>
              < ButtonContainer id="0" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={0}/>
              <p>Text</p>
              < ButtonContainer id="1" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={0}/>
              <p>Audio</p>
              < ButtonContainer id="2" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={0}/>
              <p>Alternatives</p>
              < ButtonContainer id="3" values={this.state.alternativeValues} selectedValue={this.setSelectedValue} selected={0}/>
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
