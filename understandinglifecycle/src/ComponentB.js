import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
class ComponentB extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("Component Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount");
  }

  render() {
    // const {name} = this.state;
    // console.log(name);
    console.log("Render");

    return <h2>{this.state.name}</h2>;
  }
}

export default ComponentB;
