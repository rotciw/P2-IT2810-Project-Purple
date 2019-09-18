import React, { Component } from 'react'
import './App.css';
import ButtonContainer from "../buttonContainer/ButtonContainer.js"
import Showing from "../showing/Showing"

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryValues: [(0,"category_1"), (1,"category_2"), (2,"category_3")],
      alternatives: [(0,"1"), (1,"2"), (2,"3"), (3,"4")],
      selectedTextValue: 0
    }
  }

  setSelectedValue = (value) => {
    this.setState({
      selectedTextValue:value
    })
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
              < ButtonContainer values={this.state.categoryValues} />
              <p>Text</p>
              < ButtonContainer values={this.state.categoryValues} selectedValue={this.setSelectedValue} />
              <p>Sound</p>
              < ButtonContainer values={this.state.categoryValues} />
              <p>Alternatives</p>
              < ButtonContainer values={this.state.alternatives} />
            </div>
            <div className="exhibition">
              <Showing poemNumber={this.state.selectedValue}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
