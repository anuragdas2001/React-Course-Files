import React from "react";
export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "harry",
      lastname: "potter",
      timer: 0,
    };
  }
  handleName = (e) => {
    console.log("Inside HandleName");
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  handleLastName = (e) => {
    console.log("Inside HandleLastName");
    console.log(e.target.value);
    this.setState({ lastname: e.target.value });
  };

  componentDidMount() {
    document.title = this.state.name + " " + this.state.lastname;
    this.timer = setInterval(() => {
      console.log("window_width:", window.innerWidth);
    }, 2000);
  }
  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.lastname;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <span className="Section">
          <input
            placeholder="Name"
            onChange={this.handleName}
            value={this.state.name}
          ></input>
          <input
            placeholder="Last Name"
            onChange={this.handleLastName}
            value={this.state.lastname}
          ></input>
        </span>
        <h2 className="Section">
          Hello,{this.state.name + " " + this.state.lastname}
        </h2>
      </>
    );
  }
}
