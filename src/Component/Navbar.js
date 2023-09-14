// import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  // const [myStyle,setMyStyle]=useState({
   
  //   color:'white'
  // })
  // const toggle=()=>{
     
  //     setMyStyle({
  //         backgroundColor:'dark'
  //     })
  // }
  return (
   
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
    <div className="container-fluid" >
   
      <Link className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/About">{props.about}</Link>
          </li>
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
      </div>
    </div>
  </nav>
 
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}
Navbar.defaultProps= {
    title: "hello",
    about: "hi"
}
