import React from 'react'
import Carousel from '../Components/Carousel'
import { Link } from 'react-router-dom'
import Grid from '../Components/Grid'
const username = sessionStorage.getItem('username');

function Home() {
  return (
    <div>

      {/* Calling Carousel Components*/}
      <Carousel />
      <div className="container-fluid text-center my-3">
        <div className="row">
          <div className="col">
              <h3>About Us</h3><br/>
              <p>Welcome to our PRF - Prasad Recycled Furniture ! We are a team of passionate designers who are dedicated to transforming
                your spaces into beautiful, functional and personalized living things that reflect your individual style and needs.......</p>
              <Link to="/AboutUs" className="btn btn-primary">About Us</Link>
          </div>
          <div className="col">
            <img src="/Images/custom-furniture.jpg" alt="..."/>
          </div>
        </div><hr />
        <div className="row">
          <div className="col">
              <Grid/><br/>
              <Link to={(username !== null) ? "/ProductCategories" : "/Login"} className="btn btn-primary">All Product Categories</Link>
              
            </div>
        </div><hr />
        <div className="row">
        <div className="col">
        <img src="/Images/home-bed1.jpg" alt="..." className="image"/>
        <img src="/Images/home-sofa2.png" alt="..." className="image"/>
        <img src="/Images/home-dining-table.jpg" alt="..." className="image"/>
        <img src="/Images/home-table2.jpg" alt="..." className="image"/>
        <img src="/Images/home-tea-table1.jpg" alt="..." className="image"/>
        <img src="/Images/home-cupboard3.jpg" alt="..." className="image"/>
        <img src="/Images/home-chair2.jpg" alt="..." className="image"/>
        <img src="/Images/home-bed2.jpg" alt="..." className="image"/>
        <br/>
        <Link to={(username !== null) ? "/Gallery" : "/Login"} className="btn btn-primary">Gallery</Link>
        
          </div>
        </div><hr />
        <div className="row">
          <div className="col"><img src="/Images/contact-us.jpg" alt="..."/></div>
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
          <Link to="/ContactUs" className="btn btn-primary">Contact Us</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home