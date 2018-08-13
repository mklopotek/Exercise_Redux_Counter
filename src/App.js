import React, { Component } from 'react';
import Counter from './Counter';
import CounterButtons from './Counter/CounterButtons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <CounterButtons />
      </div>
    );
  }
}

export default App;
