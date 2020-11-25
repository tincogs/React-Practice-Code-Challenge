import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       sushi: [],
       eaten: [],
       budget: 200,
       index: 0,
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(allSushi =>
      this.setState({
        sushi: allSushi
      })
    )
  }

  nextFour = (e) => {
    let newIndex = this.state.index + 4

    if(newIndex > this.state.sushi.length){
      newIndex = 0
    }

    this.setState({
        index: newIndex
    })
  }

  eatSushi = (sushi) => {
    this.state.budget < sushi.price
    ?
    alert("You don't have enough money")
    :
    this.setState(prevState =>{
      return{
        eaten:  [...prevState.eaten,
                sushi],
        budget: prevState.budget - sushi.price
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eaten={this.state.eaten} index={this.state.index} eatSushi={this.eatSushi} nextFour={this.nextFour} />
        <Table budget={this.state.budget} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;