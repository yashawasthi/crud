import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Link } from "react-router-dom"
const UserList = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUsers()
    },[]);

    const getUsers=async()=>{
        const response=await Axios.get("http://localhost:5000/users")
        setUsers(response.data);
    }

    const deleteUser=async (id)=>{
        try {
            await Axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Link to="add">Add New</Link>
        <table>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>

            

                
                {users.map((user,index)=>(
                                <tr key={user._id}>
                    <td>{index +1 }</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                        <Link to={`edit/${user._id}`}>Edit</Link>
                        <button onClick={()=>deleteUser(user._id)}>Delete</button>
                        </td>
                        </tr>
                ))}
        </table>
    </div>
  )
}

export default UserList