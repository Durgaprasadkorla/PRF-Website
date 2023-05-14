import React from 'react'
import { Link } from 'react-router-dom'

const username = sessionStorage.getItem('username');

function Card(props) {
  return (
    <div className="card1">
        <img src={props.src} className="card-img-top w-100" alt={props.alt}/>
        <div className="card-body">
            <h5 className="card-title mt-3">{props.title}</h5><br/>
            <p className="card-text">{props.text}</p>
            <Link to={(username !== null) ? "/ProductCategories" : "/Login"} className="btn border w-100">Read More</Link>
        </div>
    </div>
  )
}

export default Card