import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      confirmMessage: 'Please hit thhe confirm button',
      confirmOpen: true
    }
  }

  private handleCancelConfirmClick = () => {
    this.setState({
      confirmMessage: 'Take a break, I\'m sure you will later',
      confirmOpen: false
    });
  }

  private handleOkConfirmClick = () => {
    this.setState({
      confirmMessage: 'Cool, carry on reading!',
      confirmOpen: false
    });
  }

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
  }

  public render() {
    const { confirmOpen, confirmMessage } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm
          open={confirmOpen}
          title="React and TypeScript"
          content="Are you sure you want to learn React and TypeScript?" 
          cancelCaption="No way"
          okCaption="Yes please!"
          onCancelClick={this.handleCancelConfirmClick}
          onOkClick={this.handleOkConfirmClick}
        />
      </div>
    );
  }
}

export default App;
