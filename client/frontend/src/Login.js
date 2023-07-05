import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from './App';
import { Navigate } from 'react-router';
// import Login from './Login';

const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setdata] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
      setdata({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
       return <Navigate to='/myprofile' />
    }
    return (
        // <div>
        //     <center>
        //     <form onSubmit={submitHandler} autoComplete="off">
        //         <h3>data</h3>
        //         <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
        //         <input type="text" onChange={changeHandler} name="password" placeholder="Password" /><br />
        //         <input type="submit" value="data" /><br />
        //     </form>
        //     </center>
        // </div>
         <div className='container-fluid mt-5'>
    <div className='row justify-content-center border border-2 border-secondary p-3 mx-4'>
    <div className='col col-md-5'>
    <h2 className='text-dark mb-3 text-center display-4'>Login the Account</h2>
    <form onSubmit={submitHandler} autoComplete='off'>
      <div className='form-group'>
    <input type='text' className='form-control border border-2 border-dark'placeholder='Enter Email'name='email' value={data.email} onChange={changeHandler}/> 
      </div>
      <div className='form-group'>
    <input type='text' className='form-control border border-2 border-dark'placeholder='Enter Password' name='password' value={data.password} onChange={changeHandler}/> 
      </div>
      <button className='btn btn-success btn-lg'>Login</button>
    </form>
    </div>
    </div>
        </div>
    )
}

export default Login