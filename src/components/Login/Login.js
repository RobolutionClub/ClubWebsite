import React from 'react'
import { useState } from 'react'


const host="http://localhost:5000"
const Login = (props) => {
    const [Creds, setCreds] = useState({email:"",password:""})

    const handleSubmit=(e)=>{
        e.preventDefault()
        setCreds({email:"",password:""})


        const response=await fetch(`${host}/user/login/createuser`,{
            method: "POST",
            
            headers: {
              "Content-Type": "application/json",

             
                // 'Accept':'application/json' 
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})

        })
        const json=response.json()
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            // history("/")
        }
        const onChange=(e)=>{
            setcredentials({...credentials,[e.target.name]:e.target.value})
          }
            
        



    }

  return (
    <>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  value={credentials.password} onChange={onChange} id="password" name='password'/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </>
  )
}

export default Login