import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    // call Component's constructor first, then we can access 'this'
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
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

  // In order to access 'this' correctly,
  // Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      // if we want to run something after setState finishes,
      // we need to add the code inside the callback function(the 2rd argument of setState)
      // console.log(this.state);
    });
  };

  // built-in function in React.Component
  // when the state gets updated(setState() is called), this render function will be called automatically to rerender the UI
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      // JSX is trying to mimic what HTML does and create a virtual DOM
      // className is an JSX attribute(similar to HTML attribute class), in order to distinguish from js class.
      // {} means inside is js expression
      // Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another,
      // they need a key attribute (and CRA will warn you about it if you miss it)
      // with the key attribute, only affected/updated items will be rerendered in the DOM
      <div className="App">
        <h1 className="header">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
