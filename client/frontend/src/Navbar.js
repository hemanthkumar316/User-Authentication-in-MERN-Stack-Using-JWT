import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'
const Navbar = () => {
  const[token,setToken]=useContext(store)
  return (
    <div>
    {
      !token? 
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <Link className="nav-link" to='#'><h5>User-Authentication-in-MERN-Stack-Using-JWT</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
          <Link className="nav-link " to='/register'><h5>Register</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'><h5>Login</h5></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
:
<nav className="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}>
<Link className="nav-link" to='#'><h5>User-Authentication-in-MERN-Stack-Using-JWT</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</nav>
    }

    </div>
  )
}

export default Navbar