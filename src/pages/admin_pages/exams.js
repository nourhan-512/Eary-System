import React, { useEffect } from "react";
import "./exams.css";
import axios from "axios";
import { useState } from "react";
import { url } from "../../index.js";
import { useLocation } from "react-router-dom";

const POSTS = () => {
  const location=useLocation();
  const config=location.state && location.state.config;
  
 const WAIT_TIME = 5000;
  const [postdata, setPostdata] = useState([]);

  const [ansdata, setAnsdata] = useState({
    0: { q_id: "", title: "", priority: "" },
    1: { q_id: "", title: "", priority: "" },
    2: { q_id: "", title: "", priority: "" },
    3: { q_id: "", title: "", priority: "" },
  });
 useEffect(() => {
 
  //const id = setInterval(() => {
    
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/posts`,config);
        setPostdata(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();//},WAIT_TIME );
  // return () => clearInterval(id);
  }, []);

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const newAnsdata = {};
        for (const post of postdata) {
          const res = await axios.get(`${url}/getanswers/${post.id}`);
          newAnsdata[post.id] = {
            0: res.data[0],
            1: res.data[1],
            2: res.data[2],
            3: res.data[3],
          };
        }
        setAnsdata(newAnsdata);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAnswers();
  }, [postdata]);

  const posts = postdata.map((post) =>{
    function deletepost(e) { e.preventDefault(); axios.delete(`${url}/deletepost/${post.id}`) }
  // console.log(post.audiofile)
 return(   <div key={post.id}>
      <div id="postContainer">
        <div id="Post">
          <h3 id="t">{post.name}</h3>
          <audio controls src={post.audiofile} /> <br />
         
          <input type="radio" name="choice" value="Scripting" style={{ backgroundColor: ansdata[post.id]?.[0]?.priority === "1" ? "green !important" : "" }} />
            {ansdata[post.id]?.[0]?.title} ({ansdata[post.id]?.[0]?.priority})
        
          <br />
          <input type="radio" name="choice" value="Programming" />
          {ansdata[post.id]?.[1]?.title} ({ansdata[post.id]?.[1]?.priority})
          <br />
          <input type="radio" name="choice" value="Application" />
          {ansdata[post.id]?.[2]?.title} ({ansdata[post.id]?.[2]?.priority})
          <br />
          <input type="radio" name="choice" value="None of These" />
          {ansdata[post.id]?.[3]?.title} ({ansdata[post.id]?.[3]?.priority})
          <button id="b" onClick={deletepost}>Delete</button>
        </div>
      </div>
    </div>
   ) });
  //pen and close form
  const openForm = () => {
    if (document.getElementById("myForm")) { document.getElementById("myForm").style.display = "block"; }
  }
  const closeForm = () => {
    if (document.getElementById("myForm")) { document.getElementById("myForm").style.display = "none"; }
  }
  //schema of adding question
  const [qForm, setqForm] = useState(
    {
      name: '',
      audiofile: '',

    }
  );
 //schema of adding answer
  const [ansForm, setansForm] = useState({
   0: { title: '', priority: '' },
   1: { title: '', priority: '' },
  2:  { title: '', priority: '' },
   3: { title: '', priority: '' }
});
  //add new question to db 
  const AddQ = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('name', qForm.name);
    formData.append('audiofile', qForm.audiofile);
  
    await axios.post(`${url}/createpost`, formData).then((res) => {
      const post_id = res.data.insertId;//get id of new questions
      //console.log(qForm.audiofile)
      console.log(post_id)
      //add answers
      for (let i = 0; i < ansForm.length ; i++) {
        axios.post(`${url}/addanswer/${post_id}`, ansForm[i]).then((res) => {
     // console.log(ansForm[i])
      });}
    })
  }
  return (
    <>
      < h1 id='ad' >ALL Qusestions
        <div>
          <button id='addpost' onClick={openForm}>Add Qusestion</button>
        </div>
      </h1>
      <div>
        {posts}
      </div>
      <div className="form-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Add Question</h1>
          <input required type="text" placeholder="Question name" value={qForm.name} onChange={(event) => setqForm({ ...qForm, name: event.target.value })} />
          <input type="file" placeholder="Audio" onChange={(event) => {setqForm({ ...qForm, name: event.target.value })
          // reader.readAsArrayBuffer(file);
}} required />

          <h5 id="p">answer-priority</h5>


 
    <div id='answers'>
      <input className='answer' type="text" placeholder="answer" value={ansForm[0].title} onChange={(event) => setansForm([{ ...ansForm[0], title: event.target.value }, ansForm[1], ansForm[2], ansForm[3]])}  />
      <div className='pr'>
        <select name="pr" value={ansForm[0].priority} onChange={(event) => setansForm([{ ...ansForm[0], priority: event.target.value }, ansForm[1], ansForm[2], ansForm[3]])}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div>
    <div id='answers'>
      <input className='answer' type="text" placeholder="answer" value={ansForm[1].title} onChange={(event) => setansForm([ansForm[0], { ...ansForm[1], title: event.target.value }, ansForm[2], ansForm[3]])}  />
      <div className='pr'>
        <select name="pr" value={ansForm[1].priority} onChange={(event) => setansForm([ansForm[0], { ...ansForm[1], priority: event.target.value }, ansForm[2], ansForm[3]])}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div>
    <div id='answers'>
      <input className='answer' type="text" placeholder="answer" value={ansForm[2].title} onChange={(event) => setansForm([ansForm[0], ansForm[1], { ...ansForm[2], title: event.target.value }, ansForm[3]])}  />
      <div className='pr'>
        <select name="pr" value={ansForm[2].priority} onChange={(event) => setansForm([ansForm[0], ansForm[1], { ...ansForm[2], priority: event.target.value }, ansForm[3]])}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div>
    <div id='answers'>
      <input className='answer' type="text" placeholder="answer" value={ansForm[3].title} onChange={(event) => setansForm([ansForm[0], ansForm[1], ansForm[2], { ...ansForm[3], title: event.target.value }])}  />
      <div className='pr'>
        <select name="pr" value={ansForm[3].priority} onChange={(event) => setansForm([ansForm[0], ansForm[1],ansForm[2], { ...ansForm[3], priority: event.target.value }])}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
</div>
         
         
          <button type="submit" className="btn" onClick={AddQ}>ADD</button>
          <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
        </form>
      </div>
    </>

  )

}

export default POSTS;