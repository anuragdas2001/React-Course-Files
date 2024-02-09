import React from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    // console.log("Component Constructor");
  }
  static getDerivedStateFromProps() {
    // console.log("ComponentA getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    // console.log("ComponentA componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    // const {name} = this.state;
    // console.log(name);
    // console.log("Render");
    const { data } = this.state;
    // console.log(data);
    return (
      <>
        <h1>{this.state.name}</h1>

        <ul>
          {data.map((d, index) => {
            return <li key={index}>{d.username}</li>;
          })}
        </ul>

        {/* <ComponentB /> */}
      </>
    );
  }
}

export default ComponentA;
