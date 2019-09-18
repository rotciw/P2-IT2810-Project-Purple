import React, { Component } from 'react'

export default class Showing extends Component {
  constructor(props){
    super(props);
    this.state = {
      poems: []
    }
}

componentDidMount() {
   this.fetchPoems()
}

fetchPoems() {
    fetch("text/poems.json")
    .then(response => {
        return response.json()
        })
    .then(
        (result) => {
            console.log(result)
            this.setState({
                poems: result.poems
            })
        }
    ).catch(err => {
        console.log("Error: " + err)
    })
}

render(){
    let { poems } = this.state;
    return (
      <div>
         <ul>
          {poems.map(poem => (
            <li key={poem.id}>
              <h1>{poem.title}</h1>
              {poem.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
