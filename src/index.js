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
      min: 25,
      sec: 0,
      session: 25,
      break: 5,
      started: 0,
      phase: 'session'
    }
    this.breakIncrement = this.breakIncrement.bind(this)
    this.breakDecrement = this.breakDecrement.bind(this)
    this.sessionIncrement = this.sessionIncrement.bind(this)
    this.sessionDecrement = this.sessionDecrement.bind(this)
    this.startSession = this.startSession.bind(this)
    this.resetSession = this.resetSession.bind(this)
  }
  sessionIncrement = () => {
    if (this.state.started === 0 & this.state.session < 60) {
      this.setState({
        min: this.state.session+1,
        sec: 0,
        session: this.state.session+1
      })
    }
  }
  sessionDecrement = () => {
    if (this.state.min > 1 & this.state.started === 0) {
      this.setState({
        min: this.state.session-1,
        sec: 0,
        session: this.state.session-1
      })
    }
  }
  breakIncrement = () => {
    if (this.state.started === 0 & this.state.break < 60) {
      this.setState({
        break: this.state.break+1
      })
    }
  }
  breakDecrement = () => {
    if (this.state.break > 1 & this.state.started === 0) {
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
  resetSession = () => {
    this.setState({
      started: 0,
      session: 25,
      min: 25,
      sec: 0,
      break: 5
    })
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
      else if (this.state.min === 0 & this.state.sec === 0 & this.state.phase === 'session') {
        // beep
        document.getElementById("beep").play()
        this.setState({
          min: this.state.break,
          sec: 0,
          phase: 'break'
        })
      }
      else if (this.state.min === 0 & this.state.sec === 0 & this.state.phase === 'break') {
        // beep
        document.getElementById("beep").play()
        this.setState({
          min: this.state.session,
          sec: 0,
          phase: 'session'
        })
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
        <h1>Pomodoro Timer</h1>
        <div id="timer">
          <div id="timer-label">{this.state.phase}</div>
          <div id="time-left">{this.state.min < 10 ? "0"+this.state.min : this.state.min}:{this.state.sec < 10 ? "0"+this.state.sec : this.state.sec}</div>
          <div id="session-label">Session Length: </div>
          <div id="session-length">{this.state.session}</div>
          <button id="session-increment" onClick={this.sessionIncrement}>+</button>
          <button id="session-decrement" onClick={this.sessionDecrement}>-</button>
          <div id="break-label">Break Length: </div>
          <div id="break-length">{this.state.break}</div>
          <button id="break-increment" onClick={this.breakIncrement}>+</button>
          <button id="break-decrement" onClick={this.breakDecrement}>-</button>
          <div id="start_stop"><button onClick={this.startSession}>START/PAUSE</button></div>
          <div id="reset"><button onClick={this.resetSession}>RESET</button></div>
          <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
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
