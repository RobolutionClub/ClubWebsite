import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const host = "http://localhost:5000";
const Login = (props) => {
  const nav = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setcredentials({ email: "", password: "" });

    const response = await fetch(`${host}/user/login/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        // 'Accept':'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // localStorage.setItem("token", json.authtoken);


      console.log("signed in sucesfully");
      console.log(json.authtoken)
      
      localStorage.setItem("token", json.authtoken)
      nav('/');
      window.location.reload();
      

      
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-fields">
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={credentials.email}
              onChange={onChange}
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
