import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    // call Component's constructor first, then we can access 'this'
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((monsters) => {
        this.setState({
          monsters: monsters,
        });
      });
  }

  // built-in function in React.Component
  // when the state gets updated(setState() is called), this render function will be called automatically to rerender the UI
  render() {
    return (
      // JSX is trying to mimic what HTML does and create a virtual DOM
      // className is an JSX attribute(similar to HTML attribute class), in order to distinguish from js class.
      // {} means inside is js expression
      // Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another,
      // they need a key attribute (and CRA will warn you about it if you miss it)
      // with the key attribute, only affected/updated items will be rerendered in the DOM
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
