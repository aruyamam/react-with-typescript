import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

class App extends Component<{}, IState> {
  private timer: number = 0;
  private renderCount = 0;

  constructor(props: {}) {
    super(props);

    this.state = {
      confirmMessage: 'Please hit thhe confirm button',
      confirmOpen: false,
      confirmVisible: true,
      countDown: 10
    }
  }

  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log('getDerivedStateFromProps', props, state);

    return null;
  }

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
  }

  public shouldComponentUpdate(nextProps: {}, nextState: IState){
    console.log('shouldComponentUpdate', nextProps, nextState);

    return true;
  }

  public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
    this.renderCount += 1;
    console.log('getSnapshotBeforeUpdate', prevProps, prevState, {
      renderCount: this.renderCount
    });

    return this.renderCount;
  }

  public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot, {
      renderCount: this.renderCount
    })
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  private handleCancelConfirmClick = () => {
    this.setState({
      confirmMessage: 'Take a break, I\'m sure you will later',
      confirmOpen: false
    });
    clearInterval(this.timer);
  }

  private handleOkConfirmClick = () => {
    this.setState({
      confirmMessage: 'Cool, carry on reading!',
      confirmOpen: false
    });
    clearInterval(this.timer);
  }

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
    clearInterval(this.timer);
  }

  private handleTimerTick() {
    const {countDown} = this.state;

    this.setState({
      confirmMessage: `Please hit the confirm button ${countDown} secs to go`,
      countDown: countDown -1
    }, () => {
      if (countDown <= 0) {
        clearInterval(this.timer);
        this.setState({
          confirmMessage: 'Too late to confirm!',
          confirmVisible: false
        })
      }
    })

  }

  public render() {
    const { countDown, confirmOpen, confirmMessage, confirmVisible } = this.state;

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
        {confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>
        )}
        {
          countDown > 0 && (
            <Confirm
              open={confirmOpen}
              title="React and TypeScript"
              content="Are you sure you want to learn React and TypeScript?" 
              cancelCaption="No way"
              okCaption="Yes please!"
              onCancelClick={this.handleCancelConfirmClick}
              onOkClick={this.handleOkConfirmClick}
            />
          )
        }
      </div>
    );
  }
}

export default App;
