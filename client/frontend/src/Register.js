import React,{useState} from 'react'
import axios from'axios'
const Register = () => {
  const [register,setRegister]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })
  const changeHandler=(e)=>{
    setRegister({...register,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(register)
    axios.post('http://localhost:5000/register',register).then(
      res=>{alert(res.data);
      setRegister({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
      })}
    )
  }
  
  return (
    <div className='container-fluid mt-5'>
<div className='row justify-content-center border border-2 border-secondary p-4 m-5'>
<div className='col col-md-5'>
<h2 className='text-dark mb-3 text-center display-4'>Register Here</h2>
<form onSubmit={submitHandler}>
  <div className='form-group'>
<input type='text' className='form-control border border-2 border-dark'placeholder='Enter Username'name='username' value={register.username} onChange={changeHandler}/> 
  </div>
  <div className='form-group'>
<input type='text' className='form-control border border-2 border-dark'placeholder='Enter Email'name='email' value={register.email} onChange={changeHandler}/> 
  </div>
  <div className='form-group'>
<input type='text' className='form-control border border-2 border-dark'placeholder='Enter Password' name='password' value={register.password} onChange={changeHandler}/> 
  </div>
  <div className='form-group'>
<input type='text' className='form-control border border-2 border-dark'placeholder='Enter confirm password'name='confirmpassword' value={register.confirmpassword} onChange={changeHandler}/> 
  </div>
  <button className='btn btn-primary btn-lg'>Register</button>
</form>
</div>
</div>
    </div>
  )
}

export default Register