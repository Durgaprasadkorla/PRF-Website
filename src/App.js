import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './Style.css';
import Login from './Login';
import RegistrationForm from './Register';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Gallery from './Pages/Gallery';
import ProductCategories from './Pages/ProductCategories';
import Footer from './Components/Footer';
import Userdetails from './Pages/Userdetails';
import UserUpdate from './UserDetails/UserUpdate';
import Detail from './UserDetails/Detail';

let username = sessionStorage.getItem('username');

function App() {

  return (
    <Router>
      {/* Calling Nav Bar */}
       <Navbar />
       {/* Creating Routes */}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path='/ContactUs' element={<ContactUs /> }/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<RegistrationForm />}/>            

            {/* If Any one is login Than access these two Routes */}
            {(username !== null ) && <> <Route path='/Gallery' element={<Gallery />}/>
            <Route path='/ProductCategories' element={<ProductCategories />}/> </>}

            {/* If Admin is login Than access these Three Routes */}
            {username === 'Prasad' && <><Route path='/Userdetails' element={<Userdetails />}/>
            <Route path='/UserUpdate/:UserId' element={<UserUpdate />}/>
            <Route path='/Detail/:UserId' element={<Detail />}/></>}
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
