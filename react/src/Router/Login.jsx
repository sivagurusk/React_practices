import StudentRegistration from "./StudentRegistration";
import { useEffect } from "react";



function Login(){
    useEffect(()=>{
        document.title="Login";
},[])

    let username = "admin";
    let useremail= "admin@gmail.com";
    if(username === "admin" && useremail === "admin@gmail.com") {
        return <div>Login successful!</div>;
    }
    return <StudentRegistration/>;
}
export default Login;