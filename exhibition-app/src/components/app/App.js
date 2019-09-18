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
      // [image, text, sound, alternative_nr]
      selectedValuesList: [0, 0, 0, 0],
    }
  }

  componentDidMount(){
    this.updateCombination();
  }

  updateCombination(){
    //this.refs.setCombination.fetchImage(this.state.selectedValuesList[0], this.state.selectedValuesList[3])
    this.refs.setCombination.fetchPoem(this.state.selectedValuesList[1], this.state.selectedValuesList[3])
  }

  setSelectedValue = (value, id) => {
    let selectedValuesList = this.state.selectedValuesList;
    selectedValuesList[id] = value;
    this.setState({
      selectedValuesList: selectedValuesList,
    })
    this.updateCombination()
  }
  
render(){
    return (
        <div className="appContainer">
          <div className="header">
            <h1>Tittel</h1>
            {this.state.selectedValue}
          </div>
          <div className="contentContainer">
            <div className="categories">
              <p>Images</p>
              < ButtonContainer id="0" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={0}/>
              <p>Text</p>
              < ButtonContainer id="1" values={this.state.categoryValues} selectedValue={this.setSelectedValue} selected={0}/>
              <p>Sound</p>
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
