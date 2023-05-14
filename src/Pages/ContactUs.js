import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    const user = { name , email, phone, message };
      //console.log(user);
        fetch("http://localhost:8000/contact",{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(user)
        }).then((res)=>{
          alert("Your details Submitted successfully..");
          navigate('/')
        }).catch((err)=>{
          alert("Failed : " + err.message );
        });
};

  return (
    <div className='container-fluid text-center my-3'>
      <div className="row">
          <div className="col">
            <img src="/Images/contact-us1.jpg" alt="..." style={{height:'100px',marginTop:'60px'}}/>
          </div>
          <div className="col">
            <table className='table text-start'>
              <thead>
              <tr>
                <th colSpan={'2'} className='text-center'>CONTACT INFO</th>
              </tr></thead><tbody>
              <tr>
                <th>Address</th>
                <td><i>: PRF Store, Near Raj-Gopal Theater, Ramachandrapuram, 533255</i></td>
              </tr>
              <tr>
                <th>Phone</th>
                <td><i>: (+91) 7036248736</i></td>
              </tr>
              <tr>
                <th>Email</th>
                <td><i>: durgaprasad7036248@gmail.com</i></td>
              </tr></tbody>
            </table>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="row my-4">
        <div className="col-3"></div>
        <div className="col-6"><h3>SEND US MESSAGE</h3><br/></div>
        </div>
        <div className="row">
        <div className="col-3"></div>
          <div className="col-3">
            
            <input placeholder="Enter Your Name" type="Text" id="Text"  onChange={(e)=>setName(e.target.value)} required className="form-control border border-warning"/><br/><br/>
            <input placeholder="Enter Your Email" type="email" id="Text"  onChange={(e)=>setEmail(e.target.value)} required className="form-control border border-warning"/><br/><br/>
            <input placeholder="Enter Your Phone" type="number" id="Text"  onChange={(e)=>setPhone(e.target.value)} required className="form-control border border-warning"/><br/><br/>
          </div>
          <div className="col-3">
            <textarea placeholder="Enter Your Message" type="Text" id="Text"  onChange={(e)=>setMessage(e.target.value)}  className="form-control border border-warning"></textarea>
          </div>
        </div>
        <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
            <input value={'Submit Form'} type="submit" className='btn btn-primary'/>
        </div>
        </div>
        </form>
    </div>
  )
}

export default ContactUs