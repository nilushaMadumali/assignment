import User from "./User"
import axios from "axios";
import React, {useState} from 'react';

function UserView(props) {
    const [userData,setUserData]=useState([])

    axios.get(`https://reqres.in/api/users?page=1`)
    .then(res => {
        setUserData(res.data.data)
    })
  
    const uData=userData.map((data, i)=>{
        return <User id={data.id} avatar={data.avatar} firstName={data.first_name} email={data.email}/>
    })

    return (
    <div>
        <div className='col-12' style={{backgroundColor:"#0f7dff", textAlign:"center", height:"50px", fontSize:"25px"}}>
            Users View
        </div>
        <div className='container'>
            <div className='row'>
                {uData}
            </div>
        </div>
    </div>
    );
}

export default UserView;
