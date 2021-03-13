// import { ReactComponent } from '*.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 1,
      sec: 0,
      session: 25,
      break: 5,
      started: 0
    }
    this.breakIncrement = this.breakIncrement.bind(this)
    this.breakDecrement = this.breakDecrement.bind(this)
    this.sessionIncrement = this.sessionIncrement.bind(this)
    this.sessionDecrement = this.sessionDecrement.bind(this)
    this.startSession = this.startSession.bind(this)
  }
  sessionIncrement = () => {
    this.setState({
      session: this.state.session+1
    })
  }
  sessionDecrement = () => {
    if (this.state.session > 0) {
      this.setState({
        session: this.state.session-1
      })
    }
  }
  breakIncrement = () => {
    this.setState({
      break: this.state.break+1
    })
  }
  breakDecrement = () => {
    if (this.state.break > 0) {
      this.setState({
        break: this.state.break-1
      })
    }
  }
  startSession = () => {
    if (this.state.started === 0) {
      this.setState({
        started: 1
      })
    }
    else {
      this.setState({
        started: 0
      })
    }
  }
  myCounter = () => {
    if (this.state.started === 1) {
      if (this.state.sec > 0) {
        this.setState({
          sec: this.state.sec-1
        })
      }
      else if (this.state.sec === 0 & this.state.min > 0) {
        this.setState({
          min: this.state.min-1,
          sec: 59
        })
      }
      else {
        // beeper function
      }
    }
  }

  componentDidMount() {
    setInterval(this.myCounter.bind(this), 1000);
  }
  // componentWillUnmount(){
  //   clearInterval(this.intervalId);
  // }

  render() {
    return (
      <div>
        <h3>Pomodoro Timer</h3>
        <div id="timer">
          <div id="timer-label"></div>
          <div id="time-left">{this.state.min}:{this.state.sec}</div>
          <div id="session-length">Session Length: {this.state.session}</div>
          <div id="session-increment"><button onClick={this.sessionIncrement}>+</button></div>
          <div id="session-decrement"><button onClick={this.sessionDecrement}>-</button></div>
          <div id="break-length">Break Length: {this.state.break}</div>
          <div id="break-increment"><button onClick={this.breakIncrement}>+</button></div>
          <div id="break-decrement"><button onClick={this.breakDecrement}>-</button></div>
          <div id="start_stop"><button onClick={this.startSession}>START</button></div>
          <div id="reset"></div>
          
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
