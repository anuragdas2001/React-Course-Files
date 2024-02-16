import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
function LoginPage() {
  // const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const {email,setEmail} = useLocalStorage();

  // useEffect(()=>{
  //   let email =  localStorage.getItem("email"); 
  //   if(email){
  //    setEmail(email);
  //   }
  //  },[]);
   
  // useEffect(()=>{
  //   localStorage.setItem("email",email); 
  // },[email]);

 
 
  return (
    <>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Enter Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button>Login</button>
      <br />
    </>
  );
}

export default LoginPage;
