import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import ResetPassword from "./Components/ResetPassword";
function App() {
  const [form,setForm] = useState("login");
  return (
    <>
    <div className="Greetings">
        <h1>Welcome</h1>
        {form === 'login' ? <LoginPage/> : <ResetPassword/>}
        <button onClick={()=>{setForm(form==='login' ? 'reset' : 'login')}}>
          {form === 'login' ? 'Forgot Password' : 'Back to login'}
        </button>
      </div>
    </>
  );
}

export default App;
