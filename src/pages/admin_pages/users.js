import axios from "axios";
import React from "react";
import "./users.css";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../index.js";

const Users = () => {

    const [userdata, setuserdata] = useState([]);
    const WAIT_TIME = 500;
    useEffect(
//get all users
        () => {
            
            const id = setInterval(() => {
            axios.get(`${url}/getusers`)
                .then((res) => {
                setuserdata(res.data)
                }).catch(err =>{console.log(err)})} , WAIT_TIME);
                return () => clearInterval(id);
              }, [userdata]); 
            
        

//mapping to show users
    const users = userdata.map((user) => {
        function deleteuser(e) { e.preventDefault(); axios.delete(`${url}/deleteuser/${user.id}`) }
        
        return (

            <div id="postContainer" key={user.id} >
                <div id="uPost">
                    <h3>ID:{user.id}</h3>
                    <h3>Name:{(user.name)}</h3>
                    <h4>email:{user.email}</h4>
                    <h4>phone:{user.phone}</h4>
                    <button id="b" onClick={deleteuser}>Delete</button>

                </div>
            </div>
        )

    })
//insert user
const [userForm, setUForm] = useState(
    {   id:'',
       name: '',
       email : '',
       phone:'',
       password: ''
    }
  );

  const Adduser = (event) => {
    event.preventDefault();
    console.log(userForm);
    axios.post(`${url}/register`, userForm).then((res) => {
  }).catch(err => console.log(err))
  }
  //open &&closing adding form
  const openAForm=()=> {
    closeUForm();
    if (document.getElementById("myForm"))
    {document.getElementById("myForm").style.display = "block";}
  }
const closeAForm=() =>{
    if (document.getElementById("myForm"))
    {document.getElementById("myForm").style.display = "none";}
}

//updating form
const openUForm=()=> {
    closeAForm();
    if (document.getElementById("mForm"))
    {document.getElementById("mForm").style.display = "block";}
  }
const closeUForm=() =>{
    if (document.getElementById("mForm"))
    {document.getElementById("mForm").style.display = "none";}
}
//updateuser
const updateusers=()=> {  axios.put(`${url}/update`).then((res) => {
}).catch(err => console.log(err)) }
    return (
        <>
        
         <div id="Content " >
            <h1 id='ad'>ALL Users
            <div>
                    <button id='adduser' onClick={openAForm}>Add User</button>
                </div>
                <div>
                    <button id='updateuser' onClick={openUForm}>Update user'info</button>
                </div>
            </h1>
            <div id='users'>
                {users}
            </div>
               
       <div className="sform-popup" id="myForm">
        <form action="/action_page.php" className="sform-container">
          <h1 id='ad'>Add User</h1>
          <input type="text" placeholder="usr_name"   value={userdata.name} onChange={(event) => setUForm({ ...userForm, name: event.target.value })} required/>
          <input type="text" placeholder="email"    value={userdata.email} onChange={(event) => setUForm({ ...userForm, email: event.target.value })}required />
          <input type="text" placeholder="phone"   value={userdata.phone} onChange={(event) => setUForm({ ...userForm, phone: event.target.value })}required />
          <input type="text" placeholder="password"   value={userdata.password} onChange={(event) => setUForm({ ...userForm, password: event.target.value })}required />
          <button type="submit" className="btn"onClick={Adduser}>ADD</button>
          <button type="button" className="btn cancel" onClick={closeAForm}>Close</button>
        </form>
        </div>

        <div className="sform-popup" id="mForm">
        <form action="/action_page.php" className="sform-container">
          <h1 id='ad'>Update User</h1>
          <input type="text" placeholder="usr_id"   value={userdata.id} onChange={(event) => setUForm({ ...userForm, id: event.target.value })} required/>
          <input type="text" placeholder="usr_name"   value={userdata.name} onChange={(event) => setUForm({ ...userForm, name: event.target.value })} required/>
          <input type="text" placeholder="phone"   value={userdata.phone} onChange={(event) => setUForm({ ...userForm, phone: event.target.value })}required />
          <input type="text" placeholder="password"   value={userdata.password} onChange={(event) => setUForm({ ...userForm, password: event.target.value })}required />
          <button type="submit" className="btn" onClick={updateusers}>Update</button>
          <button type="button" className="btn cancel" onClick={closeUForm}>Close</button>
        </form>
      </div>

         </div>           
        

        </>
    )

}

export default Users;