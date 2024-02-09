import React, { Component } from 'react';
import TimerOne from './Components/TimerOne';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      TimerOn:false,
    }
  }
  HandleTimer = () => {
        this.setState({TimerOn:!this.state.TimerOn});
  }
  render(){
  return (
    <> 
    <TimerOne timerOn={this.state.TimerOn}/>
    <button onClick={this.HandleTimer}>{this.state.TimerOn ? "Stop" : "Start"}</button>
    </>

   
  );
  }
}

export default App;
