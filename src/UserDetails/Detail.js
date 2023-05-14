import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail() {
    const {UserId}= useParams();

const[detail,setDetail] = useState({});

useEffect(()=>{
    fetch("http://localhost:8000/contact/"+UserId).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setDetail(resp);
        }).catch((err)=>{
            alert("Login Failed due to : " + err.message)
        })
},[])


  return (
    <div className='container-fluid'>
        <div className='row'><div className='col-4'></div>
        {
        <div class="col-4 m-4 card ">
        <div class="card-body">
            <h5 class="card-title">Name : {detail.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Phone : {detail.phone}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">Email : {detail.email}</h6>
            <p class="card-text"><b>Message : {detail.message}</b> </p>
            <p><b>Update : {detail.update}</b></p>
            <Link to="/Userdetails" class="card-link btn btn-danger">Back</Link>
        </div>
        </div>
        }</div>
    </div> 
  )
}

export default Detail