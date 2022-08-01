import axios from 'axios';
import './UserInfo.css';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom'

function UserInfo() {
  const [firstName,setFirstName]=useState([]);
  const [lastName,setLastName]=useState([]);
  const [email,setEmai]=useState([]);
  const [avatar,setAvater]=useState([]);

  const params = useParams();

  axios.get(`https://reqres.in/api/users/${params.id}`)
  .then(res => {
      setFirstName(res.data.data.first_name)
      setLastName(res.data.data.last_name)
      setEmai(res.data.data.email)
      setAvater(res.data.data.avatar)
  })

  return (
    <div>
    <div className='col-12' style={{backgroundColor:"#0f7dff", height:"50px", fontSize:"25px"}}>
      <a href='/' style={{textDecoration:"none", color:'black', marginLeft: "15px"}}>Back</a>
    </div>
    <div className='container'>
    <div className='row' style={{marginTop:"20px"}}>
        <div className='col-md-6 col-sm-12' style={{textAlign:"center"}}>
          <img src={avatar} alt="" className='userImg'></img>
        </div>
        <div className='col-md-6 col-sm-12'>
          <div className='row info'>
              <div className='col-12'>
                <div className='row' style={{backgroundColor: "#f4f4f4", borderRadius: "15px", fontWeight:"bold"}}>
                  <div className='col-6'>
                    <div className='textContent'>First Name</div>
                    <div className='textContent'>Last Name</div>
                    <div className='textContent'style={{marginBottom:"15px"}}>Emai</div>
                  </div>
                  <div className='col-6'>
                    <div className='textContent'>{firstName}</div>
                    <div className='textContent'>{lastName}</div>
                    <div className='textContent'style={{marginBottom:"15px",overflow:"hidden"}}>{email}</div></div>
                </div>
              </div>
          </div>
        </div>
    </div>
    </div>
  </div>
  );
}
  
export default UserInfo;
  