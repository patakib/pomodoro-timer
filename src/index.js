import { ReactComponent } from '*.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    
  }

  render() {
    return (
      <div>
        <h3>Pomodoro Timer</h3>
        <div id="timer">
          <div id="timer-label">Session</div>
          <div id="time-left"></div>
          <div id="session-length"></div>
          <div id="break-length"></div>
          <div id="start_stop"></div>
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
