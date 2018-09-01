import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

class App extends Component {
  state = {
    show: false
  }

  showModal = () => {
    this.setState({
      show: !this.state.show
    })
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="App">

        <button onClick={ () => this.showModal() }>Show Modal</button>

        <Modal show={ this.state.show } onClose={ () => this.closeModal() }>
          This message is from Modal
        </Modal>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
