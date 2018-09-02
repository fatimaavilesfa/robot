import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox.js';




class App extends React.Component {
  constructor() {
    super()
    this.state =  {
      robots: robots,
      searchfield:''
    }
  }
  render() {
    return (
      <div className='tc'>
        <h1>Robot Friends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
      )
    }
}


export default App;
