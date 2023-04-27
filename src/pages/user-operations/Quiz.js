import React, { useEffect } from "react";
import "./Quiz.css";
import axios from "axios";
import { useState } from "react";
import { url } from "../../index.js";
import { useLocation, useNavigate } from "react-router-dom";
const Quiz = () => {
  const location=useLocation();
  const token=location.state&&location.state.token;
  
  const navigate = useNavigate()
  const [postdata, setPostdata] = useState([]);
  const [ansdata, setAnsdata] = useState({
    0: { q_id: "", title: "", priority: "" },
    1: { q_id: "", title: "", priority: "" },
    2: { q_id: "", title: "", priority: "" },
    3: { q_id: "", title: "", priority: "" },
  });
//get all questions
  
   useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/posts`);
        setPostdata(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
//get all answers
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

  //calculate result
  const [result, setResult] = useState(0);
   const handleClick = (p) => {
    if (p === 1) {
      setResult(result + 1);
    }
  };
  const showResult = () => {
    if (result >= 1) {
      alert(`SUCCESS🎉..Your result is ${result}`)
      
    } else {
      alert(`Hard luck ㋡.Try again.Your result is ${result}`)
    } 
   axios.post(`${url}/result/${token}/${result}/${new Date().toISOString()}`)
    setResult(0);

  };

  const logout = () => {
    try {
      axios.get(`${url}/logout`);
      navigate('/')

    } catch (err) {
      console.log(err);
    }
  }
/////////

const posts = postdata.map((post) => {
console.log(post.audiofile)

const audioBuffer = post.audiofile.data;
const audioBlob = new Blob([audioBuffer], { type: 'audio/mp3' });
const audioUrl = URL.createObjectURL(audioBlob);
console.log(audioUrl)
  return (
    <div key={post.id}>
      <div id="postContainer">
        <div id="Post">
          <h3 id="t">{post.name}</h3>
          <audio controls>
      <source src={audioUrl} type="audio/mp3" />
    </audio>
          <br />
          <input
            type="radio"
            name={`choice_${post.id}`}
            onChange={() => handleClick(ansdata[post.id]?.[0]?.priority)}

          />
          {ansdata[post.id]?.[0]?.title} ({ansdata[post.id]?.[0]?.priority})
          <br />
          <input
            type="radio"
            name={`choice_${post.id}`}
            onChange={() => handleClick(ansdata[post.id]?.[1]?.priority)}
          />
          {ansdata[post.id]?.[1]?.title} ({ansdata[post.id]?.[1]?.priority})
          <br />
          <input
            type="radio"
            name={`choice_${post.id}`}
            onClick={() => handleClick(ansdata[post.id]?.[2]?.priority)}
          />
          {ansdata[post.id]?.[2]?.title} ({ansdata[post.id]?.[2]?.priority})
          <br />
          <input
            type="radio"
            name={`choice_${post.id}`}
            onClick={() => handleClick(ansdata[post.id]?.[3]?.priority)}
          />
          {ansdata[post.id]?.[3]?.title} ({ansdata[post.id]?.[3]?.priority})
          <br />

        </div>
      </div>

    </div>
  )});
  //update

  const [userForm, setUForm] = useState(
    {
      id: '',
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  );
//history
const [history, setHistory] = useState([]);
const[historyData,setHistoryData]=useState([]);
  //open &&closing show history form
  const openShowHistoryForm = () => {
    closeUForm();
    if (document.getElementById("myForm")) {
      document.getElementById("myForm").style.display = "block";
    }
    axios
      .get(`${url}/result/${token}`)
      .then((res) => {
        setHistory(res.data);
        const newHistoryData = res.data.map((hist) => (
          <div>
            <h3>
             <b> Result:</b>{hist.result} _ Date: {hist.date}
            </h3>
          </div>
        ));
        setHistoryData(newHistoryData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const closeSForm = () => {
    if (document.getElementById("myForm")) { document.getElementById("myForm").style.display = "none"; }
  }

  //updating form
  const openUpdateForm = () => {
    closeSForm();
    if (document.getElementById("mForm")) { document.getElementById("mForm").style.display = "block"; }

  }
  const closeUForm = () => {
    if (document.getElementById("mForm")) { document.getElementById("mForm").style.display = "none"; }
  }
  //updateuser
  const update = () => {
    axios.put(`${url}/update`).then((res) => {
    }).catch(err => console.log(err))
  }

  //history

  return (
    <>

      <ul id='ul'>
        <h1 id='ad'>Time to exam</h1>
        <li id="r" onClick={showResult} >Submit</li>
        
        <li id="s" onClick={openShowHistoryForm} >Show history</li>
        <li id="u" onClick={openUpdateForm} >Update profile</li>
        <li id="o" onClick={logout} >Logout</li>
      </ul>
      <div>
        {posts}
      </div>

      <div className="sform-popu" id="myForm">
        <form action="/action_page.php" className="sform-container">
           
        {historyData}

         <button type="button" className="btn cancel" onClick={closeSForm}>Close</button>
       
        </form>
      </div>
 
      <div className="sform-popu" id="mForm">
        <form action="/action_page.php" className="sform-container">
          <h1 id='ad'>Update profile</h1>
          <input type="text" placeholder="usr_id" onChange={(event) => setUForm({ ...userForm, id: event.target.value })} required />
          <input type="text" placeholder="usr_name" onChange={(event) => setUForm({ ...userForm, name: event.target.value })} required />
          <input type="text" placeholder="phone" onChange={(event) => setUForm({ ...userForm, phone: event.target.value })} required />
          <input type="text" placeholder="password" onChange={(event) => setUForm({ ...userForm, password: event.target.value })} required />
          <button type="submit" className="btn" onClick={update}>Update</button>
          <button type="button" className="btn cancel" onClick={closeUForm}>Close</button>
        </form>
      </div>

    </>
  );
};

export default Quiz;
