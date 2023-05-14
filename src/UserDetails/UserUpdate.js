import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";



function UserUpdate() {
  const{UserId}=useParams();
 //const [users,setUsers] = useState({});

  useEffect(()=>{
    fetch("http://localhost:8000/contact/"+UserId).then((res)=>{
            return res.json();
        }).then((resp)=>{
          setName(resp.name);
          setEmail(resp.email);
          setPhone(resp.phone);
          setMessage(resp.message);

        }).catch((err)=>{
            alert("Show details failed due to : " + err.message)
        })
  },[])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [update,setUpdate] =useState('');


  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    const user = { name , email, phone, message,update };
      //console.log(user);
        fetch("http://localhost:8000/contact/"+UserId,{
          method:"PUT",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(user)
        }).then((res)=>{
          alert("details Updated successfully..");
          navigate('/Userdetails')
        }).catch((err)=>{
          alert("Failed : " + err.message );
        });
};

  return (
    <div className='container-fluid text-center my-3'>
        <form onSubmit={handleSubmit}>
        <div className="row my-4">
        <div className="col-3"></div>
        <div className="col-6"><h3>Update Data</h3><br/></div>
        </div>
        <div className="row">
        <div className="col-3"></div>
          <div className="col-3">
            
            <input placeholder="Enter Your Name" type="Text" id="Text" value={name}  onChange={(e)=>setName(e.target.value)} required className="form-control border border-warning"/><br/><br/>
            <input placeholder="Enter Your Email" type="email" id="Text" value={email} onChange={(e)=>setEmail(e.target.value)} required className="form-control border border-warning"/><br/><br/>
            <input placeholder="Enter Your Phone" type="number" id="Text" value={phone} onChange={(e)=>setPhone(e.target.value)} required className="form-control border border-warning"/><br/><br/>
          </div>
          <div className="col-3">
            <textarea placeholder="Enter Your Message" type="Text" id="Text" value={message} onChange={(e)=>setMessage(e.target.value)}  className="form-control border border-warning"></textarea>
          </div>
        </div>
        <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
            <select onChange={(e)=>setUpdate(e.target.value)} required className="form-control border border-warning">
              <option value={null}>--Select--</option>
              <option>Contacted</option>
              <option>Not-Answered</option>
              <option>Not-Contact</option>
              <option>Taken Requirements</option>
              <option>Order Booked</option>
            </select>
        </div>
        </div>
        <div className="row my-3">
        <div className="col-3"></div>
        <div className="col-6">
            <input value={'Update Form'} type="submit" className='btn btn-primary'/>
        </div>
        </div>
        </form>
        <Link className='btn btn-danger' to={'/Userdetails'}>Back</Link>
    </div>
  )
}

export default UserUpdate