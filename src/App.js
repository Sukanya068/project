import React, { Component } from 'react';
import Header from '../src/components/Header';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
      </div>
    );
  }
}
export default App;