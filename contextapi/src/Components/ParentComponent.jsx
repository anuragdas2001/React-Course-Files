import { useState } from "react";
import { context } from "../context";
import { ChildComponent } from "./ChildComponent";
import { GrandChildComponent } from "./GrandChildComponent";
export default function ParentComponent() {
  console.log(context);
  const [color, setColor] = useState("#000000");
  return (
    <>
      <h1>ParentComponent</h1>
      <context.Provider value="red">
        <ChildComponent />
        {/* <GrandChildComponent/> */}
      </context.Provider>
    </>
  );
}
