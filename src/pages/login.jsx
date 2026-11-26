import { useState } from "react";
function Login(){
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
  function handleSubmit(e){
    e.preventDefault();
  console.log(formdata)
}
const[formdata, setFormdata] = useState({
  username:"",
  password:""
})
function handleChange(e){
   setFormdata({...formdata,
      [e.target.name]:e.target.value
})
 
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