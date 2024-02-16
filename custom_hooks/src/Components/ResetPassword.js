import {useState,useEffect} from "react"
import useLocalStorage from "./useLocalStorage";
function ResetPassword() {
    // const [email,setEmail] = useState("");
    const {email,setEmail}=useLocalStorage();

    // useEffect(()=>{
    //    let email =  localStorage.getItem("email"); 
    //    if(email){
    //     setEmail(email);
    //    }
    //   },[]);

    //   useEffect(()=>{
    //     localStorage.setItem("email",email);

    //   },[email])


    return (
      <>
      
        <input placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <br/>
        <button>Continue</button>
     
      
      </>
    );
  }
  
  export default ResetPassword;
  