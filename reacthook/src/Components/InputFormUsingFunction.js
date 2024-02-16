import { useState,useEffect } from "react";
export default function Input () {

  const [name,setName] = useState("Harry");
  const [Lastname,setLastName] = useState("");
  
  //ComponentDidMount && ComponentDidUpdate
  // useEffect(()=>{
  //   document.title = name + " " + Lastname
  // })
  //ComponentDidMount
  // useEffect(()=>{
  //   document.title = name + " " + Lastname
  // },[])
  //ComponentDidUpdate
  useEffect(()=>{
    document.title = name + " " + Lastname
  },[Lastname])

  useEffect(()=>{
    let timer = setInterval(()=>{
      console.log("window_width:",window.innerWidth);
  },2000)
  //componentWillUnmount
  return(clearInterval(timer))
  })


    return (
      <>
        <span className="Section">
          <input
            placeholder="Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
          ></input>
          <input
            placeholder="Last Name"
            onChange={(e)=>setLastName(e.target.value)}
          ></input>
        </span>
        <h2 className="Section">Hello,{name + " " + Lastname}</h2>
      </>
    );
  
}
