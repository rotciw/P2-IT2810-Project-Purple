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
      selectedCategoriesList: [null, null, null],
      selectedAlternative: null,
    }
  }

  setSelectedValue = (value, id) => {
    if (id <= 2){
      let selectedCategoriesList = this.state.selectedCategoriesList;
      selectedCategoriesList[id] = value;
      this.setState({
        selectedCategoriesList: selectedCategoriesList,
      })
      if (id === 1){
        this.refs.poemNumber.fetchPoem(null, value)
      }
    }
    else{
      let selectedAlternative = value;
      this.setState({
        selectedAlternative: selectedAlternative,
      })
    }
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
              < ButtonContainer id="0" values={this.state.categoryValues} selectedValue={this.setSelectedValue} />
              <p>Text</p>
              < ButtonContainer id="1" values={this.state.categoryValues} selectedValue={this.setSelectedValue} />
              <p>Sound</p>
              < ButtonContainer id="2" values={this.state.categoryValues} selectedValue={this.setSelectedValue}/>
              <p>Alternatives</p>
              < ButtonContainer id="3" values={this.state.alternativeValues} selectedValue={this.setSelectedValue}/>
            </div>
            <div className="exhibition">
              <Showing ref="poemNumber" />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
