import { useContext } from "react";
import { context } from "../context";
export function GrandChildComponent() {
  //   const value = useContext(context);
  //   console.log(value);
  return (
    <>
      <context.Consumer>
        {(value) => <h1>GrandChildComponent:{value}</h1>}
      </context.Consumer>
    </>
  );
}
