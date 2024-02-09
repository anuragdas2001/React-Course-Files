import React from "react";
class TimerOne extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer= null;
    console.log("TimerOne Constructor");
  }
  //Updating Phase
  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps");

    return null;
  }
  //Updating Phase
  shouldComponentUpdate(nextProps,nextState) {
    console.log("shouldComponentUpdate")
    console.log(nextState.time)
    if(nextState.time%5==0){
      return true;
    }
    else{
      return false;
    }
    
  }
 
  //Updating Phase
  render() {
    console.log("TimerOne Render");
    // console.log(new Date(this.state.time * 1000).toUTCString().slice(17))
    // console.log(new Date(this.state.time * 1000).toUTCString())

    return (
      <>
        <h1>Time Spent:</h1>
        {/* {new Date(this.state.time * 1000).toDateString} */}
        {/* <h1>{new Date(this.state.time * 1000).toDateString}</h1> */}
        <h2>{new Date(this.state.time * 1000).toUTCString().slice(17,25)}</h2>
      </>
    );
  }
  //Mounting Phase
  componentDidMount() {
    console.log("Inside componentDidMount");
    console.log("-------------------------");
    //  this.timer=setInterval(()=>{
    //      this.setState({time:this.state.time+1})
    //  },1000);
  }
  //Updating Phase
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return true;
  }
  //Updating Phase
  componentDidUpdate(prevProps,prevState,snapShot) {
    console.log("TimerOne componentDidUpdate");
    // if(this.state.time==3){
    //     clearInterval(this.timer);
    // }
     
     if(prevProps.timerOn!==this.props.timerOn){
      if(this.props.timerOn){
        this.timer=setInterval(()=>{
          this.setState({time:this.state.time+1})
      },1000);
      }
      else{
     clearInterval(this.timer)

      }
     }
    // console.log(prevProps.timerOn);
    //  if(prevProps.timerOn){
    //      clearInterval(this.timer)
    //  }
  }
  //UnMounting Phase
  componentWillUnmount(){
        console.log("Timer componentWillUnmount")
        // clearInterval(this.timer);
     
        
  }
}

export default TimerOne;
