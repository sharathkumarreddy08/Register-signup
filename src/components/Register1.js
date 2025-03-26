import React,{useState} from "react";
function Register1(){
    const[userform, setUserForm]=useState(
        {
            email:"",
            password:"",
            phoneNumber:""
        }
    )
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUserForm((prevState)=>(
            {...prevState,
                [name]:value,
            }
        ));
        console.log(userform);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userform);
        //reset form
        setUserForm({
            email:"",
            password:"",
            phoneNumber:""
        })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="enter your email" value={userform.email} name="email" onChange={handleChange}/>
                </div>
                <div style={{marginTop:20, marginBottom:20}}>
                 <input placeholder="enter your password" value={userform.password} name="password" onChange={handleChange} />
                </div>
                <div style={{marginBottom:20}}>
                 <input placeholder="enter your number" value={userform.phoneNumber} name="phoneNumber" onChange={handleChange} />
                </div>
              <button type="submit">signup</button>
            </form>
        </div>
    )
}
export default Register1;