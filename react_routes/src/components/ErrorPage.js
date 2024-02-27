import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
export default function Error(){
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },3000);
    },[])
    return(<>
        <h1>Something went Wrong!</h1>
        <h2>Error 404</h2>
    </>)
}