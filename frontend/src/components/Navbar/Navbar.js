import React ,{useEffect,useState} from "react";
import img from "./robolution.png";
import'./Navbar.css'
import {Link,useNavigate} from "react-router-dom";



export default function Navbar() {
  let navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    // setname("")

    navigate('/')
   

  }

  const [name, setname] = useState()

  useEffect(() => {
    if(localStorage.getItem('token')){
      TheUsername()
    }
   

  
  }, [])
  
  const host="http://localhost:5000"

  const TheUsername=async(req,res)=>{
    const authToken = localStorage.getItem('token')
   


    const data=await fetch(`${host}/user/login/getuser`,{
      method: "POST",
            
      headers: {
        "Content-Type": "application/json",
        'auth-token':authToken
       
          // 'Accept':'application/json' 
      },
     

    })
    const json=await data.json()
    console.log(json+"asas")
    setname(json.name)
    console.log(json.name)
    setname(json.name)
    // console.log(name)
  //   if(json.success){
   
     
  // }

  
}
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <img className="roboimg" src={img} alt="nil" width={"30px"}/>
      <a className="navbar-brand mx-2 logo-brand " href="/">
        Robolution Club of Bit
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        {/* {name?null:<div style={{color:"white"}}>{name}</div>} */}
        { localStorage.getItem('token')?<div className="Welcome-name" style={{color:"white"}}>{"Welcome "+name}</div>:null}
        <ul className="navbar-nav ms-auto mx-3 ">
          <li className="nav-item mx-2 my-1 text-light"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item mx-2 my-1 text-light"><Link to="/events" className="nav-link">Events</Link></li>
          <li className="nav-item mx-2 my-1 text-light"><Link to="/" className="nav-link">Board</Link></li>
          <li className="nav-item mx-2 my-1 text-light"><Link to="/" className="nav-link">About Us</Link></li>
          <li className="nav-item mx-2 my-1 text-light"><Link to="/" className="nav-link">Join Us</Link></li>
          {!localStorage.getItem('token')?
        <div>
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/register" role="/register">Register</Link>
        </div>:<button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button>}
        
          
        </ul>
        
      </div>
    </nav>
  );
}
