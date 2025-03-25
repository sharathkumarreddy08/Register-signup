import React , {useState} from 'react';
function Register(){
    const[email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        setEmail('');
        setPassword('');
    }
    return(
        <div className='heading1'>
            <form onSubmit={handleSubmit}>
               <div>
              

                <input type='email' placeholder='enter your email' value={email} onChange={(event)=>{setEmail(event.target.value);}} />
               </div>
               <div style={{marginTop:20 , marginBottom:20}}>
                <input type='password' minLength={"8"} placeholder="enter your password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
               </div>
              <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register;