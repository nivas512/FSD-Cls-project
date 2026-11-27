import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
function Login(){
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const[logindata,setLogindata]=useState({
    username:"",
    password:""
 } )


function handleChange(e){
   setLogindata({...logindata,
      [e.target.name]:e.target.value
})}
   function handleSubmit(e){
    e.preventDefault();
  const registerdata=location.state
    if(registerdata.name===logindata.username&&registerdata.password===logindata.password){
      console.log("if success")
      navigate("/dashboard",{state:logindata})
    }else{
      console.log("invalid")
    }
}


    return(
      /* <div className="text-blue-500">HI </div>

   <input type="email" required placeholder="Enter your email" value={email} onChange={(param) => setEmail(param.target.value)} />
   <br></br>
   <input type="password" required placeholder="Enter your password" value={password} onChange={(param) => setPassword(param.target.value)} />
   <br></br>
   <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
      <form onSubmit={handleSubmit}>
   <input type="text" required placeholder="Enter your username" name="username" onChange={handleChange} />
   <br></br>
   <br></br>
   <input type="password" required placeholder="Enter your password" name="password" onChange={handleChange} />
   <br></br>
   <br></br>
   <button type="submit">submit</button>
      </form>)
}
export default Login;