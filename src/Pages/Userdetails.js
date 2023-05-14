import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Userdetails() {
    const [Users, setUsers] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:8000/contact").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setUsers(resp);
        }).catch((err)=>{
            alert("Userdetails Failed due to : " + err.message)
        })
    },[]);

    const LoadUpdate=(id)=>{
        navigate('/UserUpdate/'+id)
    }
    const LoadDetails=(id)=>{
        navigate('/Detail/'+id)
    }
    const Remove=(id)=>{
        if(window.confirm("Do you to Remove")){
            fetch("http://localhost:8000/contact/"+id,{
            method:"DELETE",
            }).then((res)=>{
            alert("Removed successfully..");
            window.location.reload();
            }).catch((err)=>{
            alert("Failed : " + err.message );
            });
        }
    }
    return(
        <>
        
        <table className="table table-dark table-hover">
        <thead><tr><td colSpan={'2'}></td><td colSpan={'4'}><center><h1>User Details</h1></center></td>
        <td><Link className='btn btn-success' to={'/ContactUs'}>Add New (+)</Link></td>
        </tr><br/>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Message</td>
                <td>Update</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            { Users && Users.map((Item)=> {return(<tr><td>{Item.id}</td>
                                                        <td>{Item.name}</td>
                                                        <td>{Item.email}</td>
                                                        <td>{Item.phone}</td>
                                                        <td>{Item.message}</td>
                                                        <td>{Item.update}</td>
                                                        <td><button onClick={()=>{LoadUpdate(Item.id)}} className='btn btn-success me-2'>Update</button> 
                                                            <button onClick={()=>{LoadDetails(Item.id)}} className='btn btn-primary me-2'>Details</button> 
                                                            <button onClick={()=>{Remove(Item.id)}} className='btn btn-danger'>remove</button></td>
                                                        </tr>)})}
        </tbody>
        </table>
    </>
    )
}
export default Userdetails;
