import React from "react";
import "./login.css"
import "../sign up/sign up.js"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "../../index.js";

const Login = () => {
  const [loginForm, setloginForm] = useState(
    {
      email: '',
      password: '',
    }
  );
  const navigate = useNavigate()
  let token;
  let config;
  let B_token;
  const login = (e) => {
    e.preventDefault();
   // console.log(loginForm);
    axios.post(`${url}/authlogin`, loginForm).then(
      (res) => {
        B_token=res.headers.authorization
       console.log(token)
        config={
        headers:{'Authorization': `${B_token}`}
      }
       
      //need to find better way for rendering pages
       if (res.data == '0') {
        token =res.headers.authorization.split(' ')[1];
        axios.get(`${url}/authlogin/Quiz`,config).then((res)=>{if (res.data=='1'){navigate('/Quiz',{state:{token:token}})}})}
        else if (res.data == '1') {
        axios.get(`${url}/authlogin/admin`,config).then((res)=>{if (res.data=='1'){navigate('/admin')}})
        }
        else { alert('wrong info') }
      }
    ).catch(err => console.log(err))
      ;
  }



  return (
    <>

      <div className="login">


        <form className="loginform">

          <div className="input-lbox">
            <label id='la'>Email Address</label>
            <input id='li' type="text" placeholder="e-mail" value={loginForm.email} onChange={(event) => setloginForm({ ...loginForm, email: event.target.value })} />
          </div>


          <div className="input-lbox">
            <label id='la'>Bassword</label>
            <input id='li' type="password" placeholder="password" value={loginForm.password} onChange={(event) => setloginForm({ ...loginForm, password: event.target.value })} />
          </div>


          <button className="formButton" type="submit" onClick={login} >Login</button>
          <p>
            Don't have account? <Link to={"../sign up"}>Sign up</Link>
          </p>
        </form>


      </div>

    </>

  )
}


export default Login;
