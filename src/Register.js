import React, { useState }  from "react";
import { Link, useNavigate} from "react-router-dom";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const user = { firstName, lastName, id, password };
      //console.log(user);
        fetch("http://localhost:8000/user",{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(user)
        }).then((res)=>{
          
          alert("Registered successfully..");
          navigate('/Login');
        }).catch((err)=>{
          alert("Failed : " + err.message );
        });
};
    return (<div className="Body">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Register to your account</p>
                        <div className="input-container">
                        <input placeholder="Enter First Name" type="text" id="firstName" onChange={(e)=>setFirstName(e.target.value)} required/>
                        </div>
                        <div className="input-container">
                        <input placeholder="Enter Last Name" type="text" id="lastName" onChange={(e)=>setLastName(e.target.value)} required/>
                        </div>
                        <div className="input-container">
                        <input placeholder="Enter username" type="Text" id="Text"  onChange={(e)=>setId(e.target.value)} required/>
                        
                    </div>
                    <div className="input-container">
                        <input placeholder="Enter password" type="password" id="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        
                        <input className="submit" type={"submit"} value={"Submit"}/>
                    <p className="signup-link">
                        No account? 
                        <Link to="/Login">Log in</Link>
                    </p>
                </form>
                
            </div>);
}

export default RegistrationForm;
