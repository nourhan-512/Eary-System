
import React from "react";
import "./sign up.css";
import "../login/login.js";
import { useState } from "react";
import axios from "axios";
import { url } from "../../index.js";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const [signForm, setsignForm] = useState(
    {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  );

  const signUp = (event) => {
    event.preventDefault();
    
    axios.post(`${url}/register`, signForm).then((res) => {console.log(res.data.data)
     }
   
    ).catch(err => console.log(err))
  }

  return (
    <div>



       
          <form className="sform">
          
            <div className="sinput-box">
              <label id='sl'>Full Name</label>
              <input id='si' type="text" placeholder="username" value={signForm.name} onChange={(event) => setsignForm({ ...signForm, name: event.target.value })} />
            </div>

            <div className="sinput-box">
              <label id='sl'>Email Address</label>
              <input id='si' type="text" placeholder="e-mail" value={signForm.email} onChange={(event) => setsignForm({ ...signForm, email: event.target.value })} />
            </div>

            <div className="column">
              <div className="sinput-box">
                <label id='sl'>Phone Number</label>
                <input id='si' type="text" placeholder="phone" value={signForm.phone} onChange={(event) => setsignForm({ ...signForm, phone: event.target.value })} />
              </div>
              <div className="sinput-box">
                <label id='sl'>Bassword</label>
                <input id='si' type="password" placeholder="password" value={signForm.password} onChange={(event) => setsignForm({ ...signForm, password: event.target.value })} />
              </div>
            </div>

            <button className="sformButton" type="submit" onClick={signUp} >Signup</button>
            <div>
            Already have an account? <Link to={"../Login"}>Login here</Link>
          </div>
          </form>
          
        </div>

      
   

  )
}
export default Signup;