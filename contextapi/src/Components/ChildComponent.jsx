import { GrandChildComponent } from "./GrandChildComponent";
import { context } from "../context";
import { useContext } from "react";
export function ChildComponent() {
    const value = useContext(context);
    // console.log(value);
  return (
    <>
      <h1>ChildComponent:{value}</h1>
      <GrandChildComponent/>
    </>
  );
}
