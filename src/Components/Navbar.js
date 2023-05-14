import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

const navigate = useNavigate();

let username = sessionStorage.getItem('username');

const logout=()=>{
    
    sessionStorage.clear();
    navigate('/')
    window.location.reload();
}

    return (<nav  className="navbar navbar-expand-lg sticky-top"  data-bs-theme="dark">
            <div  className="container-fluid">
                <img src='./Images/prf-logo-black.png' alt='logo'/>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div  className="navbar-nav">
                    <Link to="/" className="nav-link px-2">Home</Link> 
                    <Link to="/AboutUs" className="nav-link px-2">About</Link>

                    {(username !== null ) && <><Link to="/ProductCategories"  className="nav-link px-2">Product Categories</Link> 
                    <Link to="/Gallery" className="nav-link px-2">Gallery</Link></>} 

                    <Link to="/ContactUs" className="nav-link px-2">Contact</Link>

                    {username === null && <><Link to="/Login" className="nav-link px-2">Log-In</Link>
                    <Link to="/Register" className="nav-link px-2">Register</Link></>}
                    
                    <div className="dropdown" data-bs-theme="light">
                        <button className="nav-link px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {username !== null && <><i className="fa-solid fa-user"></i> User : { username } </>}
                        </button>
                        <ul className="dropdown-menu">
                            {username === 'Prasad' && <li><Link to="/Userdetails" className=" dropdown-item nav-link px-2 text-dark">User Details</Link></li>}
                            {username !== null && <li><Link className="dropdown-item nav-link px-2 text-dark" onClick={logout}>Log-Out</Link></li>}
                        </ul>
                        </div>
                </div>
                </div>
            </div>
            </nav>
        )
}

export default Navbar