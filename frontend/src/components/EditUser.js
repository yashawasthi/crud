import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
const EditUser = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const navigate=useNavigate();
    const {id}=useParams()


    useEffect(()=>{
        getUserById();
    },[]);

    const getUserById=async ()=>{
        const response=await Axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    };

    const updateUser=async(e)=>{
        e.preventDefault();   
        try {
            await Axios.patch(`http://localhost:5000/users/${id}`,{
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
        <form onSubmit={updateUser}>
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
        <button type="submit">Edit</button>
        </form>
        
    </div>
  )
}

export default EditUser