import React, { Component } from 'react'
import './App.css';
import ButtonContainer from "../buttonContainer/ButtonContainer.js"

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryValues: [(0,"category_1"), (1,"category_2"), (2,"category_3")]
    }
}
render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>Images</p>
          < ButtonContainer values={this.state.categoryValues} />
          <p>Text</p>
          < ButtonContainer values={this.state.categoryValues}/>
          <p>Sound</p>
          < ButtonContainer values={this.state.categoryValues}/>
        </header>
      </div>
    );
  }
}

export default App;
