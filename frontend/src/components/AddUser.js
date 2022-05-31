import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const navigate=useNavigate();
    const saveUser=async(e)=>{
        e.preventDefault();   
        try {
            await Axios.post("http://localhost:5000/users",{
                 name,
                 email,
                 gender
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
     }

  return (
    <div>
        <form onSubmit={saveUser}>
        <input placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        ></input>
        <input placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <input placeholder="gender"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default AddUser