import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const host="http://localhost:5000"
const Login = (props) =>{
  const nav=useNavigate()
    const [credentials, setcredentials] = useState({email:"",password:""})

    const onChange=(e)=>{
      setcredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setcredentials({email:"",password:""})


        const response=await fetch(`${host}/user/login/login`,{
            method: "POST",
            
            headers: {
              "Content-Type": "application/json",

             
                // 'Accept':'application/json' 
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})

        })
        const json=await response.json()
      
        if(json.success){
           
            nav("/")
            localStorage.setItem('token',json.authtoken)
                    
            console.log('signed in sucesfully')
            
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